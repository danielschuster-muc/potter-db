# frozen_string_literal: true

module Types
  class BookType < Types::BaseObject
    # field :id, ID, null: false
    field :slug, String
    field :title, String
    field :summary, String
    field :author, String
    field :release_date, GraphQL::Types::ISO8601Date
    field :dedication, String
    field :pages, Integer
    # field :order, Integer
    field :cover, String
    field :wiki, String
    field :chapters, [Types::ChapterType], null: false, description: "List all chapters"
    field :chapter, ChapterType, "Find a chapter by slug" do
      argument :slug, String, required: true
    end

    def chapter(slug:)
      Book.find_by_slug(object.slug).chapters.all
      Chapter.find_by_slug(slug)
    end
    # field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    # field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
