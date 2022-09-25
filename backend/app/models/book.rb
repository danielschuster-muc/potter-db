class Book < ActiveRecord::Base
  has_many :chapters, dependent: :destroy
  default_scope { order(order: :asc) }
end
