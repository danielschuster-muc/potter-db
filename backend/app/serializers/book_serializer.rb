class BookSerializer < ApplicationSerializer
  attributes(
    :title,
    :summary,
    :release_date,
    :dedication,
    :pages,
    :order,
    :cover_url
  )

  has_many :chapters
end
