class BookSerializer < ApplicationSerializer
  attributes(
    :author,
    :cover,
    :dedication,
    :pages,
    :release_date,
    :summary,
    :title,
    :wiki
  )
  has_many :chapters
end
