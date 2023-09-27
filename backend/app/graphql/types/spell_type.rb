# frozen_string_literal: true

module Types
  class SpellType < Types::BaseObject
    field :category, String
    field :creator, String
    field :effect, String
    field :hand, String
    field :image, String
    field :incantation, String
    field :light, String
    field :name, String
    field :slug, String
    field :wiki, String
  end
end
