class Chapter < ApplicationRecord
  belongs_to :book
  default_scope { order(order: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[order summary title]
  end
end
