class SpellSerializer < ApplicationSerializer
  attributes(
    :name,
    :incantation,
    :category,
    :effect,
    :light,
    :hand,
    :creator,
    :image_url,
    :wiki_link
  )
end
