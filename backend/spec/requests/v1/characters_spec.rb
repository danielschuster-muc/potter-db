require 'rails_helper'

RSpec.describe "V1::Characters", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/v1/characters/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/v1/characters/show"
      expect(response).to have_http_status(:success)
    end
  end

end
