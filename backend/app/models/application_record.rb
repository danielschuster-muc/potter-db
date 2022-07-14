class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def should_generate_new_friendly_id?
    false
  end
end
