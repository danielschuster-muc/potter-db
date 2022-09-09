class Book < ApplicationRecord
  extend FriendlyId

  has_many :chapters, dependent: :destroy

  default_scope { order(order: :asc) }
end
