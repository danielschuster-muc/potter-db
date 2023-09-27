require 'rails_helper'

RSpec.describe "V1::Documentation" do
  describe "GET /openapi" do
    it "returns YAML when specified" do
      get "/v1/openapi.yaml"
      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq("text/yaml; charset=utf-8")
    end

    it "returns JSON when specified" do
      get "/v1/openapi.json"
      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end

    it "returns JSON when unspecified" do
      get "/v1/openapi"
      expect(response).to have_http_status(:success)
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end
  end
end
