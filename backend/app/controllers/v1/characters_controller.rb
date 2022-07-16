class V1::CharactersController < ApplicationController
  def index
    allowed = %i[name born died species height weight hair_color eye_color skin_color blood_status marital_status nationality animagus boggart house patronus]

    jsonapi_filter(Character.all, allowed) do |filtered|
      jsonapi_paginate(filtered.result) do |paginated|
        render jsonapi: paginated
      end
    end
  end

  def show
    character = params[:id].eql?("random") ? Character.all.sample : Character.friendly.find_by_friendly_id(params[:id])
    render jsonapi: character
  end
end
