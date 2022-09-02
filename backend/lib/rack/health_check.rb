module Rack
  class HealthCheck
    def call(_env)
      [
        ok? ? 204 : 503, {}, []
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
