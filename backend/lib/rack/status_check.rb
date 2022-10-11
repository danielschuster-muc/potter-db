module Rack
  class StatusCheck
    def call(_env)
      if ok?
        [200, {}, [{ data: { message: "Everything is up and running" } }.to_json]]
      else
        [500, {}, [{ errors: [{ status: 500, title: "Database Error", detail: {
          db_connected: database_connected?,
          migrations_updated: migrations_updated?
        } }] }.to_json]]
      end
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
