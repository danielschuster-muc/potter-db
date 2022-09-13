require 'rails_helper'

RSpec.describe "V1::Movies", type: :request do
    describe "GET /index" do
    before do
      create_list(:movie, 10)
    end

    it "returns http success" do
      get v1_movies_path
      expect(response).to have_http_status(:success)
    end

    it "returns a list of 10 movies" do
      get v1_movies_path
      movies = JSON.parse(response.body)['data']
      expect(movies.count).to eq(10)
    end
  end

  describe "GET /show" do
    let!(:movie) { create(:movie) }

    it "returns http success" do
      get v1_movie_path(movie)
      expect(response).to have_http_status(:success)
    end

    it "returns http success with 'random'" do
      get v1_movie_path("random")
      expect(response).to have_http_status(:success)
    end

    it "returns http not_found with invalid" do
      get v1_movie_path(1)
      expect(response).to have_http_status(:not_found)
    end
  end
end
