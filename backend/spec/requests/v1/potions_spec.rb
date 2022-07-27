require 'rails_helper'

RSpec.describe "V1::Potions", type: :request do
  describe "GET /index" do
    before do
      create_list(:potion, 10)
    end

    it "returns http success" do
      get v1_potions_path
      expect(response).to have_http_status(:success)
    end

    it "returns a list of 10 potions" do
      get v1_potions_path
      potions = JSON.parse(response.body)['data']
      expect(potions.count).to eq(10)
    end
  end

  describe "GET /show" do
    let!(:potion) { create(:potion) }

    it "returns http success" do
      get v1_potion_path(potion)
      expect(response).to have_http_status(:success)
    end

    it "returns http success with 'random'" do
      get v1_potion_path("random")
      expect(response).to have_http_status(:success)
    end

    it "returns http not_found with invalid" do
      get v1_potion_path(1)
      expect(response).to have_http_status(:not_found)
    end
  end
end
