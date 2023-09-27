# frozen_string_literal: true

module Types
  class ChapterType < Types::BaseObject
    # field :id, ID, null: false
    field :slug, String
    field :title, String
    field :summary, String
    field :order, Integer
    # field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    # field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
