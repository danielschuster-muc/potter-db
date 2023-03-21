class Potion < ActiveRecord::Base
  default_scope { order(name: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    ["characteristics", "difficulty", "effect", "id", "image", "ingredients", "inventors", "manufacturers", "name", "side_effects", "slug", "time", "wiki"]
  end
end
