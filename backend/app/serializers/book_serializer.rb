class BookSerializer < ApplicationSerializer
  attributes(
    :title,
    :summary,
    :author,
    :release_date,
    :dedication,
    :pages,
    :cover,
    :wiki
  )
  has_many :chapters
end
