require 'rails_helper'

RSpec.describe "V1::Characters", type: :request do
  describe "GET /index" do
    before do
      create_list(:character, 10)
    end

    it "returns http success" do
      get v1_characters_path
      expect(response).to have_http_status(:success)
    end

    it "returns a list of 10 characters" do
      get v1_characters_path
      characters = JSON.parse(response.body)['data']
      expect(characters.count).to eq(10)
    end
  end

  describe "GET /show" do
    let!(:character) { create(:character) }

    it "returns http success" do
      get v1_character_path(character)
      expect(response).to have_http_status(:success)
    end

    it "returns http success with 'random'" do
      get v1_character_path("random")
      expect(response).to have_http_status(:success)
    end

    it "returns http not_found with invalid" do
      get v1_character_path(1)
      expect(response).to have_http_status(:not_found)
    end
  end
end
