class V1::SpellsController < ApplicationController
  def index
    allowed = %i[name incantation category effect light hand creator image_url wiki_link]

    jsonapi_filter(Spell.all, allowed) do |filtered|
      jsonapi_paginate(filtered.result) do |paginated|
        render jsonapi: paginated
      end
    end
  end

  def show
    render jsonapi: Spell.friendly.find_by_friendly_id(params[:id])
  end
end
