require 'rails_helper'

RSpec.describe "Documentation" do
  describe "GET /openapi" do
    it "returns YAML when no type specified" do
      get "/openapi"
      expect(response).to have_http_status(:success)
    end

    it "returns YAML" do
      get "/openapi.yaml"
      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq("text/yaml; charset=utf-8")
    end

    it "returns JSON" do
      get "/openapi.json"
      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end
  end
end
