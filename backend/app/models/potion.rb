class Potion < ApplicationRecord
  default_scope { order(name: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[characteristics difficulty effect ingredients inventors manufacturers name side_effects time]
  end
end
