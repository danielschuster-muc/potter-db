module V1
  class BooksController < ApplicationController
    def index
      allowed = %i[title summary release_date dedication pages order cover]

      jsonapi_filter(Book.all, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      id = params[:id]
      book = id.eql?("random") ? Book.all.sample : Book.friendly.find_by_friendly_id(id)
      render jsonapi: book
    end
  end
end
