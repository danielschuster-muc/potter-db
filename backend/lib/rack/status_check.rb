module Rack
  class StatusCheck
    def call(_env)
      status = {
        status: ok? ? "Everything is up and running" : "Oh no, something is broken!",
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
      ApplicationRecord.establish_connection
      ApplicationRecord.connection
      ApplicationRecord.connected?
    rescue StandardError
      false
    end

    def migrations_updated?
      return false unless database_connected?

      !ApplicationRecord.connection.migration_context.needs_migration?
    end
  end
end
