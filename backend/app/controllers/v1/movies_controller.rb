module V1
  class MoviesController < ApplicationController
    def index
      allowed = %i[title summary directors screenwriters producers cinematographers editors music_composers release_date
                   running_time budget box_office rating order]

      jsonapi_filter(Movie.all, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      id = params[:id]
      @movie = id.eql?("random") ? Movie.all.sample : Movie.find_by(slug: id) || Movie.find(id)
      render jsonapi: @movie
    end
  end
end
