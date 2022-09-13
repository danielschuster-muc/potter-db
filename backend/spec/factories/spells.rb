FactoryBot.define do
  factory :spell do
    slug { Faker::Lorem.characters(number: 50) }
    name { "MyString" }
    incantation { "MyString" }
    category { "MyString" }
    effect { "MyString" }
    light { "MyString" }
    hand { "MyString" }
    creator { "MyString" }
    image { "MyText" }
    wiki { "MyText" }
  end
end
