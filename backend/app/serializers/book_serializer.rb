class BookSerializer < ApplicationSerializer
  attributes(
    :title,
    :summary,
    :release_date,
    :dedication,
    :pages,
    :order,
    :cover,
    :wiki
  )
  has_many :chapters
end
