class Movie < ApplicationRecord
  default_scope { order(release_date: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[box_office budget cinematographers directors distributors editors music_composers producers rating release_date
       running_time screenwriters summary title ]
  end
end
