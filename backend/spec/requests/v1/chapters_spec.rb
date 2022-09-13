require 'rails_helper'

RSpec.describe "V1::Chapters", type: :request do
  let!(:chapter_list) { create_list(:chapter, 10) }
  let!(:book) { create(:book, chapters: chapter_list) }

  describe "GET /index" do
    it "returns http success" do
      get v1_book_chapters_path(book_id: book.slug)
      expect(response).to have_http_status(:success)
    end

    it "returns a list of 10 chapters" do
      get v1_book_chapters_path(book_id: book.slug)
      chapters = JSON.parse(response.body)['data']
      expect(chapters.count).to eq(10)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get v1_book_chapter_path(book_id: book.slug, id: chapter_list.first.slug)
      expect(response).to have_http_status(:success)
    end

    it "returns http success with 'random'" do
      get v1_book_chapter_path(book_id: book.slug, id: "random")
      expect(response).to have_http_status(:success)
    end

    it "returns http not_found with invalid" do
      get v1_book_chapter_path(book_id: book.slug, id: 1)
      expect(response).to have_http_status(:not_found)
    end
  end
end
