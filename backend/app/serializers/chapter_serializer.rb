class ChapterSerializer < ApplicationSerializer
  attributes :title, :summary, :order
  belongs_to :book
end
