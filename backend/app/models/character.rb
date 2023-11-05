class Character < ApplicationRecord
  default_scope { order(name: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[alias_names animagus blood_status boggart born died eye_color family_members gender hair_color height house jobs
       marital_status name nationality patronus romances skin_color species titles wands weight ]
  end
end
