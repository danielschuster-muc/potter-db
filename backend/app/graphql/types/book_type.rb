# frozen_string_literal: true

module Types
  class BookType < Types::BaseObject
    # field :id, ID, null: false
    field :slug, String
    field :title, String
    field :summary, String
    field :release_date, GraphQL::Types::ISO8601Date
    field :dedication, String
    field :pages, Integer
    field :order, Integer
    field :cover, String
    field :wiki, String
    field :chapters, ChapterType.connection_type, null: false, connection: true, description: "List all chapters"
    field :chapter, ChapterType, "Find a chapter by slug" do
      argument :chapter_slug, String, required: true
    end

    def chapter(chapter_slug:)
      Book.find_by_slug(object.slug).chapters.all
      Chapter.find_by_slug(chapter_slug)
    end
    # field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    # field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
