module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # Books
    field :books, [Types::BookType], null: false, description: "List all books"
    def books(**_args)
      Book.all
    end

    field :book, BookType, "Find a book by slug" do
      argument :slug, String, required: true
    end
    def book(slug:)
      Book.find_by_slug(slug)
    end

    # Characters
    field :characters, [Types::CharacterType], null: false, description: "List all characters"
    def characters(**_args)
      Character.all
    end

    field :character, Types::CharacterType, "Find a character by slug" do
      argument :slug, String, required: true
    end
    def character(slug:)
      Character.find_by_slug(slug)
    end

    # Movies
    field :movies, [Types::MovieType], null: false, description: "List all movies"
    def movies(**_args)
      Movie.all
    end

    field :movie, Types::MovieType, "Find a movie by slug" do
      argument :slug, String, required: true
    end
    def movie(slug:)
      Movie.find_by_slug(slug)
    end

    # Potions
    field :potions, [Types::PotionType], null: false, description: "List all potions"
    def potions(**_args)
      Potion.all
    end

    field :potion, Types::PotionType, "Find a potion by slug" do
      argument :slug, String, required: true
    end
    def potion(slug:)
      Potion.find_by_slug(slug)
    end

    # Spells
    field :spells, [Types::SpellType], null: false, description: "List all spells"
    def spells(**_args)
      Spell.all
    end

    field :spell, Types::SpellType, "Find a spell by slug" do
      argument :slug, String, required: true
    end
    def spell(slug:)
      Spell.find_by_slug(slug)
    end
  end
end
