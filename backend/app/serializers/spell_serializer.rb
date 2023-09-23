class SpellSerializer < ApplicationSerializer
  attributes(
    :category,
    :creator,
    :effect,
    :hand,
    :image,
    :incantation,
    :light,
    :name,
    :wiki
  )
end
