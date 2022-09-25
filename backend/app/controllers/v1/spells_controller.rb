module V1
  class SpellsController < ApplicationController
    def index
      allowed = %i[name incantation category effect light hand creator]

      jsonapi_filter(Spell.all, allowed) do |filtered|
        jsonapi_paginate(filtered.result) do |paginated|
          render jsonapi: paginated
        end
      end
    end

    def show
      id = params[:id]
      @spell = id.eql?("random") ? Spell.all.sample : Spell.find_by(slug: id) || Spell.find(id)
      render jsonapi: @spell
    end
  end
end
