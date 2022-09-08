class Chapter < ApplicationRecord
  extend FriendlyId

  belongs_to :book
  default_scope { order(order: :asc) }
end
