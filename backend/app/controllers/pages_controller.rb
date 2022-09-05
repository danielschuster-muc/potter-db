class PagesController < ApplicationController
  def home
    api_routes = Rails.application.routes.routes.map { |r| r.path.spec.to_s.gsub!("(.:format)", "") }.filter { |r| r&.start_with?("/v1") }
    render json: { message: "welcome to the harry potter api!", api_routes: api_routes }
  end
end
