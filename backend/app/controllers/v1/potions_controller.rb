module V1
  class PotionsController < ApplicationController
    def index
      allowed = %i[name effect side_effects characteristics time difficulty ingredients inventors manufacturers]

      jsonapi_filter(Potion.all, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      id = params[:id]
      @potion = id.eql?("random") ? Potion.all.sample : Potion.find_by(slug: id) || Potion.find(id)
      render jsonapi: @potion
    end
  end
end
