module Rack
  class StatusCheck
    def call(_env)
      status = {
        status: ok? ? "everything is up and running" : "oh no, it's broken!",
        database: {
          connected: database_connected?,
          migrations_updated: migrations_updated?
        }
      }

      [
        ok? ? 200 : 503, {}, [status.to_json]
      ]
    end

    private

    def ok?
      database_connected? && migrations_updated?
    end

    def database_connected?
      ActiveRecord::Base.connection
      ActiveRecord::Base.connected?
    rescue ActiveRecord::NoDatabaseError
      false
    else
      true
    end

    def migrations_updated?
      return false unless database_connected?

      !ActiveRecord::Base.connection.migration_context.needs_migration?
    end
  end
end
