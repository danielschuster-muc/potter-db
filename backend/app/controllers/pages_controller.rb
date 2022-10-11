class PagesController < ApplicationController
  def home
    all_routes = Rails.application.routes.routes.map { |r| r.path.spec.to_s.gsub!("(.:format)", "") }
    filtered_routes = all_routes.filter { |r| r&.start_with?("/v1") }

    render json: {
      data: { message: "Welcome to the Potter DB API!", api_routes: filtered_routes }
    }
  end
end
