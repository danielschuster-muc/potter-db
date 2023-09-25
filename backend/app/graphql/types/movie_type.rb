# frozen_string_literal: true

module Types
  class MovieType < Types::BaseObject
    field :id, ID, null: false
    field :slug, String
    field :title, String
    field :summary, String
    field :directors, [String]
    field :screenwriters, [String]
    field :producers, [String]
    field :cinematographers, [String]
    field :editors, [String]
    field :distributors, [String]
    field :music_composers, [String]
    field :release_date, GraphQL::Types::ISO8601Date
    field :running_time, String
    field :budget, String
    field :box_office, String
    field :rating, String
    # field :order, Integer
    field :trailer, String
    field :poster, String
    field :wiki, String
    # field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    # field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
