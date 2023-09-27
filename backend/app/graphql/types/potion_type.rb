# frozen_string_literal: true

module Types
  class PotionType < Types::BaseObject
    field :characteristics, String
    field :difficulty, String
    field :effect, String
    field :image, String
    field :inventors, String
    field :ingredients, String
    field :manufacturers, String
    field :name, String
    field :side_effects, String
    field :slug, String
    field :time, String
    field :wiki, String
  end
end
