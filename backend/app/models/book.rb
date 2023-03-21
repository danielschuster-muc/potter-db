class Book < ActiveRecord::Base
  has_many :chapters, dependent: :destroy
  default_scope { order(order: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    ["author", "cover", "dedication", "id", "order", "pages", "release_date", "slug", "summary", "title", "wiki"]
  end
end
