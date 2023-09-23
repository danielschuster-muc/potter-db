class Book < ActiveRecord::Base
  has_many :chapters, dependent: :destroy
  default_scope { order(release_date: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    ["author", "cover", "dedication", "order", "pages", "release_date", "slug", "summary", "title", "wiki"]
  end
end
