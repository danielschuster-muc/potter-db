class Book < ApplicationRecord
  extend FriendlyId

  has_many :chapters, dependent: :destroy
end
