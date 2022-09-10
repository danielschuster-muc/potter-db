class SpellSerializer < ApplicationSerializer
  attributes(
    :name,
    :incantation,
    :category,
    :effect,
    :light,
    :hand,
    :creator,
    :image,
    :wiki
  )
end
