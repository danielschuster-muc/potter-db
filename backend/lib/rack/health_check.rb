module Rack
  class HealthCheck
    def call(_env)
      status = {
        status: ok? ? "Everything is up and running" : "Database not available"
      }
      [
        ok? ? 200 : 503, {}, [status.to_json]
      ]
    end

    private

    def ok?
      database_connected?
    end

    def database_connected?
      ApplicationRecord.establish_connection
      ApplicationRecord.connection
      ApplicationRecord.connected?
    rescue StandardError
      false
    end
  end
end
