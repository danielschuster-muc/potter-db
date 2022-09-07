module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # Characters
    field :all_characters, [CharacterType], null: false, description: "List all characters"
    def all_characters
      Character.all
    end

    field :characters_connection, CharacterType.connection_type, null: false, connection: true
    def characters_connection(**_args)
      Character.all
    end

    field :character, CharacterType, "Find a character by slug" do
      argument :slug, String, required: true
    end
    def character(slug:)
      Character.friendly.find_by_friendly_id(slug)
    end

    # Potions
    field :all_potions, [PotionType], null: false, description: "List all potions"
    def all_potions
      Potion.all
    end

    field :potions_connection, PotionType.connection_type, null: false, connection: true
    def potions_connection(**_args)
      Potion.all
    end

    field :potion, PotionType, "Find a potion by slug" do
      argument :slug, String, required: true
    end
    def potion(slug:)
      Potion.friendly.find_by_friendly_id(slug)
    end

    # Spells
    field :all_spells, [SpellType], null: false, description: "List all spells"
    def all_spells
      Spell.all
    end

    field :spells_connection, SpellType.connection_type, null: false, connection: true
    def spells_connection(**_args)
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
