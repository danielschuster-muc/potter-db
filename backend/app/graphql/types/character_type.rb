# frozen_string_literal: true

module Types
  class CharacterType < Types::BaseObject
    field :slug, String, null: false
    field :name, String
    field :born, String
    field :died, String
    field :gender, String
    field :species, String
    field :height, String
    field :weight, String
    field :hair_color, String
    field :eye_color, String
    field :skin_color, String
    field :blood_status, String
    field :marital_status, String
    field :nationality, String
    field :animagus, String
    field :boggart, String
    field :house, String
    field :patronus, String
    field :alias_names, [String]
    field :family_members, [String]
    field :jobs, [String]
    field :romances, [String]
    field :titles, [String]
    field :wands, [String]
    field :image, String
    field :wiki, String
  end
end
