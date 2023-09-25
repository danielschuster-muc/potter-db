# frozen_string_literal: true

module Types
  class PotionType < Types::BaseObject
    field :id, ID, null: false
    field :slug, String
    field :name, String
    field :effect, String
    field :side_effects, String
    field :characteristics, String
    field :time, String
    field :difficulty, String
    field :ingredients, String
    field :inventors, String
    field :manufacturers, String
    field :image, String
    field :wiki, String
    # field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    # field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
