class PotionSerializer < ApplicationSerializer
  attributes(
    :characteristics,
    :difficulty,
    :effect,
    :image,
    :inventors,
    :ingredients,
    :manufacturers,
    :name,
    :side_effects,
    :time,
    :wiki
  )
end
