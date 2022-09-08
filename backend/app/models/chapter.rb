class Chapter < ApplicationRecord
  extend FriendlyId

  belongs_to :book
end
