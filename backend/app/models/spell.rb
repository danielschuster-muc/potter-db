class Spell < ActiveRecord::Base
  default_scope { order(name: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    ["category", "creator", "effect", "hand", "image", "incantation", "light", "name", "slug", "wiki"]
  end
end
