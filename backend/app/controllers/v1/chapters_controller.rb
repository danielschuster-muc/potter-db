module V1
  class ChaptersController < ApplicationController
    def index
      allowed = %i[title summary order]

      @book_chapters = Book.friendly.find_by_friendly_id(params[:book_id]).chapters.all
      jsonapi_filter(@book_chapters, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      @book_chapters = Book.friendly.find_by_friendly_id(params[:book_id]).chapters.all
      book = params[:id].eql?("random") ? @book_chapters.sample : @book_chapters.friendly.find_by_friendly_id(params[:id])
      render jsonapi: book
    end
  end
end
