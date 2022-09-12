module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # Books
    field :all_books, BookType.connection_type, null: false, connection: true,  description: "List all books"
    def all_books(**_args)
      Book.all
    end

    field :book, BookType, "Find a book by slug" do
      argument :slug, String, required: true
    end
    def book(slug:)
      Book.friendly.find_by_friendly_id(slug)
    end


    # Characters
    field :all_characters, CharacterType.connection_type, null: false, connection: true,  description: "List all characters"
    def all_characters(**_args)
      Character.all
    end

    field :character, CharacterType, "Find a character by slug" do
      argument :slug, String, required: true
    end
    def character(slug:)
      Character.friendly.find_by_friendly_id(slug)
    end

    # Potions

    field :all_potions, PotionType.connection_type, null: false, connection: true, description: "List all potions"
    def all_potions(**_args)
      Potion.all
    end

    field :potion, PotionType, "Find a potion by slug" do
      argument :slug, String, required: true
    end
    def potion(slug:)
      Potion.friendly.find_by_friendly_id(slug)
    end

    # Spells

    field :all_spells, SpellType.connection_type, null: false, connection: true, description: "List all spells"
    def all_spells(**_args)
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
