class Movie < ApplicationRecord
  extend FriendlyId

  default_scope { order(order: :asc) }
end
