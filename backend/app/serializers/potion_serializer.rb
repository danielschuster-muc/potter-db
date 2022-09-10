class PotionSerializer < ApplicationSerializer
  attributes(
    :slug,
    :name,
    :effect,
    :side_effects,
    :characteristics,
    :time,
    :difficulty,
    :ingredients,
    :inventors,
    :manufacturers,
    :image,
    :wiki
  )
end
