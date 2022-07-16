class V1::SpellsController < ApplicationController
  def index
    allowed = %i[name incantation category effect light hand creator]

    jsonapi_filter(Spell.all, allowed) do |filtered|
      jsonapi_paginate(filtered.result) do |paginated|
        render jsonapi: paginated
      end
    end
  end

  def show
    spell = params[:id].eql?("random") ? Spell.all.sample : Spell.friendly.find_by_friendly_id(params[:id])
    render jsonapi: spell
  end
end
