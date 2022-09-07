# frozen_string_literal: true

module Types
  class SpellType < Types::BaseObject
    # field :id, ID, null: false
    field :slug, String
    field :name, String
    field :incantation, String
    field :category, String
    field :effect, String
    field :light, String
    field :hand, String
    field :creator, String
    field :image_url, String
    field :wiki_link, String
    # field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    # field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
