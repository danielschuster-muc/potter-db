class V1::PotionsController < ApplicationController
  def index
    allowed = %i[name effect side_effects characteristics time difficulty ingredients inventors manufacturers]

    jsonapi_filter(Potion.all, allowed) do |filtered|
      jsonapi_paginate(filtered.result) do |paginated|
        render jsonapi: paginated
      end
    end
  end

  def show
    potion = params[:id].eql?("random") ? Potion.all.sample : Potion.friendly.find_by_friendly_id(params[:id])
    render jsonapi: potion
  end
end
