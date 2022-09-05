# This file is used by Rack-based servers to start the application.

require_relative "config/environment"
require_relative "lib/rack/status_check"

use Rack::Cors do
  allow do
    origins "*"
    resource "/status", headers: :any, methods: :get
  end
end

map "/status" do
  run Rack::StatusCheck.new
end

run Rails.application
Rails.application.load_server
