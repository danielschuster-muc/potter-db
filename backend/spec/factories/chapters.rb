FactoryBot.define do
  factory :chapter do
    slug { "MyString" }
    title { "MyString" }
    summary { "MyText" }
    order { 1 }
    book { nil }
  end
end
