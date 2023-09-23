class ChapterSerializer < ApplicationSerializer
  attributes(
    :order,
    :summary,
    :title
  )
  belongs_to :book

  link(:self) { |object| url_for([:v1, object.book, object, { only_path: true }]) }
end
