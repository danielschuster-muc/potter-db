module V1
  class CharactersController < ApplicationController
    def index
      allowed = %i[name born died species gender height weight hair_color eye_color skin_color blood_status
                   marital_status nationality animagus boggart house patronus]

      jsonapi_filter(Character.all, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      id = params[:id]
      @character = id.eql?("random") ? Character.all.sample : Character.find_by(slug: id) || Character.find(id)
      render jsonapi: @character
    end
  end
end
