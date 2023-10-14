# frozen_string_literal: true

module Types
  class BookType < Types::BaseObject
    field :author, String
    field :cover, String
    field :dedication, String
    field :pages, Integer
    field :release_date, GraphQL::Types::ISO8601Date
    field :slug, String
    field :summary, String
    field :title, String
    field :wiki, String

    field :chapters, ChapterType.connection_type, null: false, connection: true, description: "List all chapters"
    field :chapter, ChapterType, "Find a chapter by slug" do
      argument :chapter_slug, String, required: true
    end

    def chapter(chapter_slug:)
      Book.find_by(slug: object.slug).chapters.all
      Chapter.find_by(slug: chapter_slug)
    end
  end
end
