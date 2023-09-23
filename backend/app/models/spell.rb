class Spell < ActiveRecord::Base
  default_scope { order(name: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[category creator effect hand incantation light name]
  end
end
