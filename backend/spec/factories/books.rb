FactoryBot.define do
  factory :book do
    slug { "MyString" }
    title { "MyString" }
    summary { "MyText" }
    release_date { "2022-09-08" }
    dedication { "MyString" }
    pages { 1 }
    order { 1 }
    cover_url { "MyText" }
  end
end
