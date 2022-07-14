class Spell < ApplicationRecord
  extend FriendlyId

  default_scope { order(name: :asc) }
end
