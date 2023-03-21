class Character < ActiveRecord::Base
  default_scope { order(name: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    ["alias_names", "animagus", "blood_status", "boggart", "born", "died", "eye_color", "family_members", "gender", "hair_color", "height", "house", "image", "jobs", "marital_status", "name", "nationality", "patronus", "romances", "skin_color", "slug", "species", "titles", "wands", "weight", "wiki"]
  end
end
