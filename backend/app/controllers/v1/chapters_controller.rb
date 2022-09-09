module V1
  class ChaptersController < ApplicationController
    def index
      allowed = %i[title summary order]

      @book = Book.friendly.find_by_friendly_id(params[:book_id])
      jsonapi_filter(@book.chapters.all, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      id = params[:id]
      book = id.eql?("random") ? Chapter.all.sample : Chapter.friendly.find_by_friendly_id(id)
      render jsonapi: book
    end
  end
end
