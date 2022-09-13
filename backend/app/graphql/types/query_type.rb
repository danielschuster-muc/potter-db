module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # Books
    field :books, BookType.connection_type, null: false, connection: true, description: "List all books"
    def books(**_args)
      Book.all
    end

    field :book, BookType, "Find a book by slug" do
      argument :slug, String, required: true
    end
    def book(slug:)
      Book.friendly.find_by_friendly_id(slug)
    end

    # Characters
    field :characters, CharacterType.connection_type, null: false, connection: true, description: "List all characters"
    def characters(**_args)
      Character.all
    end

    field :character, CharacterType, "Find a character by slug" do
      argument :slug, String, required: true
    end
    def character(slug:)
      Character.friendly.find_by_friendly_id(slug)
    end

    # Potions
    field :potions, PotionType.connection_type, null: false, connection: true, description: "List all potions"
    def potions(**_args)
      Potion.all
    end

    field :potion, PotionType, "Find a potion by slug" do
      argument :slug, String, required: true
    end
    def potion(slug:)
      Potion.friendly.find_by_friendly_id(slug)
    end

    # Spells
    field :spells, SpellType.connection_type, null: false, connection: true, description: "List all spells"
    def spells(**_args)
      Spell.all
    end

    field :spell, SpellType, "Find a spell by slug" do
      argument :slug, String, required: true
    end
    def spell(slug:)
      Spell.friendly.find_by_friendly_id(slug)
    end
  end
end
