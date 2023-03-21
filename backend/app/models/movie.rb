class Movie < ActiveRecord::Base
  default_scope { order(order: :asc) }

  def self.ransackable_attributes(_auth_object = nil)
    ["box_office", "budget", "cinematographers", "directors", "distributors", "editors", "music_composers", "order", "poster", "producers", "rating", "release_date", "running_time", "screenwriters", "slug", "summary", "title", "trailer", "wiki"]
  end
end
