require 'rails_helper'

RSpec.describe "V1::Spells", type: :request do
  describe "GET /index" do
    before do
      create_list(:spell, 10)
    end

    it "returns http success" do
      get v1_spells_path
      expect(response).to have_http_status(:success)
    end

    it "returns a list of 10 spells" do
      get v1_spells_path
      spells = JSON.parse(response.body)['data']
      expect(spells.count).to eq(10)
    end
  end

  describe "GET /show" do
    let!(:spell) { create(:spell) }

    it "returns http success" do
      get v1_spell_path(spell)
      expect(response).to have_http_status(:success)
    end

    it "returns http success with 'random'" do
      get v1_spell_path("random")
      expect(response).to have_http_status(:success)
    end

    it "returns http not_found with invalid" do
      get v1_spell_path(1)
      expect(response).to have_http_status(:not_found)
    end
  end
end
