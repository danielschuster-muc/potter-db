class PagesController < ApplicationController
  def home
    all_routes = Rails.application.routes.routes.map do |r|
      r.path.spec.to_s.gsub!("(.:format)", "")
    end
    filtered_routes = all_routes.filter { |r| r&.start_with?("/v1") }
    render json: { message: "welcome to the harry potter api!", api_routes: filtered_routes }
  end
end
