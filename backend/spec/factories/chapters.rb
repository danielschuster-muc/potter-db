FactoryBot.define do
  factory :chapter do
    slug { Faker::Lorem.characters(number: 50) }
    title { "MyString" }
    summary { "MyText" }
    order { 1 }
    book
  end
end
