FactoryBot.define do
  factory :chapter do
    slug { Faker::Lorem.unique.word }
    title { "MyString" }
    summary { "MyText" }
    order { 1 }
    book
  end
end
