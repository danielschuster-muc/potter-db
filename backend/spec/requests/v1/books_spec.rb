require 'rails_helper'

RSpec.describe "V1::Books", type: :request do
  describe "GET /index" do
    before do
      create_list(:book, 10)
    end

    it "returns http success" do
      get v1_books_path
      expect(response).to have_http_status(:success)
    end

    it "returns a list of 10 books" do
      get v1_books_path
      books = JSON.parse(response.body)['data']
      expect(books.count).to eq(10)
    end
  end

  describe "GET /show" do
    let!(:book) { create(:book) }

    it "returns http success" do
      get v1_book_path(book)
      expect(response).to have_http_status(:success)
    end

    it "returns http success with 'random'" do
      get v1_book_path("random")
      expect(response).to have_http_status(:success)
    end

    it "returns http not_found with invalid" do
      get v1_book_path(1)
      expect(response).to have_http_status(:not_found)
    end
  end
end
