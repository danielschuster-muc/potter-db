class Book < ApplicationRecord
  has_many :chapters, dependent: :destroy
  default_scope { order(release_date: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[author dedication pages release_date summary title]
  end
end
