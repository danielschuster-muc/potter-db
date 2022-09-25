class Chapter < ActiveRecord::Base
  belongs_to :book
  default_scope { order(order: :asc) }
end
