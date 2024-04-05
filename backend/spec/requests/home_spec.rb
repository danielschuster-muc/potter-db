require 'rails_helper'

RSpec.describe "Home", type: :request do
  describe "GET /index" do
    it "returns a welcome message" do
      get "/"

      expect(response).to have_http_status(:ok)
      expect(response.body).to eq({
        message: "Welcome to the Potter DB: API! Check out the docs for more information: https://docs.potterdb.com"
      }.to_json)
    end
  end
end
