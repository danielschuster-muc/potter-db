module V1
  class ChaptersController < ApplicationController
    before_action :set_book_chapters

    def index
      allowed = %i[title summary order]

      jsonapi_filter(@book_chapters, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      id = params[:id]
      @chapter = id.eql?("random") ? @book_chapters.sample : @book_chapters.find_by(slug: id) || @book_chapters.find(id)
      render jsonapi: @chapter
    end

    private

    def set_book_chapters
      book_id = params[:book_id]
      book = Book.find_by(slug: book_id) || Book.find(book_id)
      @book_chapters = book.chapters.all
    end
  end
end
