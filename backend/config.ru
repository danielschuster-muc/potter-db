# This file is used by Rack-based servers to start the application.

require_relative "config/environment"
require_relative "lib/rack/status_check"

use Rack::Cors do
  allow do
    origins "*"
    resource "/", headers: :any, methods: :get
  end
end

map "/" do
  run Rack::StatusCheck.new
end

run Rails.application
Rails.application.load_server
