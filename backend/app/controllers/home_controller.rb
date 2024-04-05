class HomeController < ApplicationController
  def index
    render json: { message: "Welcome to the Potter DB: API! Check out the docs for more information: https://docs.potterdb.com" }
  end
end
