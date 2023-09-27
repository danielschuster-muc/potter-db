# frozen_string_literal: true

module Types
  class ChapterType < Types::BaseObject
    field :order, Integer
    field :slug, String
    field :summary, String
    field :title, String
  end
end
