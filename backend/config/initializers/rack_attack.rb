class Rack::Attack
  Rack::Attack.enabled = Rails.env.development? || Rails.env.production?
  Rack::Attack.cache.store = ActiveSupport::Cache::MemoryStore.new # defaults to Rails.cache

  safelist('allow from potter db root domain', &:db_domain?)

  # 15 requests / minute
  # 21600 requests / day
  # 9000 requests / hour
  limit_proc = 900
  period_proc = 1.hour

  throttle("requests by ip", limit: limit_proc, period: period_proc, &:ip)

  Rack::Attack.throttled_responder = lambda do |request|
    now = Time.zone.now
    match_data = request.env['rack.attack.match_data']
    headers = {
      'RateLimit-Limit' => rpm(match_data),
      'RateLimit-Remaining' => '0',
      'RateLimit-Reset' => (now + (match_data[:period] - (now.to_i % match_data[:period]))).iso8601
    }

    status = 429

    [status, headers, [
      {
        errors: [
          {
            status:,
            title: "To many requests!",
            detail: "API rate limit exceeded for #{request.env['rack.attack.match_discriminator']}. Limit: #{rpm(match_data)}"
          }
        ]
      }.to_json
    ]]
  end

  ActiveSupport::Notifications.subscribe("throttle.rack_attack") do |_name, _start, _finish, _request_id, payload|
    rack_logger ||= ActiveSupport::TaggedLogging.new(Logger.new($stdout))
    rack_logger.info(
      [
        "[#{payload[:request].env['rack.attack.match_type']}]",
        "[#{payload[:request].env['rack.attack.matched']}]",
        "[#{payload[:request].env['rack.attack.match_discriminator']}]",
        "[#{payload[:request].env['rack.attack.throttle_data']}]"
      ].join(' ')
    )
  end
end

class Rack::Attack::Request < ::Rack::Request
  def localhost?
    ip == "127.0.0.1"
  end

  def db_domain?
    if Rails.env.development?
      localhost?
    else
      base_url == "potterdb.com"
    end
  end
end

private

def rpm(match_data)
  "#{(match_data[:limit] / (match_data[:period] / 60.0)).round(1)} requests / minute"
end
