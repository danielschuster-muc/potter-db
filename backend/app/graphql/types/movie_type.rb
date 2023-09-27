# frozen_string_literal: true

module Types
  class MovieType < Types::BaseObject
    field :box_office, String
    field :budget, String
    field :cinematographers, [String]
    field :directors, [String]
    field :distributors, [String]
    field :editors, [String]
    field :music_composers, [String]
    field :poster, String
    field :producers, [String]
    field :rating, String
    field :release_date, GraphQL::Types::ISO8601Date
    field :running_time, String
    field :screenwriters, [String]
    field :slug, String
    field :summary, String
    field :title, String
    field :trailer, String
    field :wiki, String
  end
end
