FactoryBot.define do
  factory :potion do
    slug { Faker::Lorem.characters(number: 50) }
    name { "MyString" }
    effect { "MyString" }
    side_effects { "MyString" }
    characteristics { "MyString" }
    time { "MyString" }
    difficulty { "MyString" }
    ingredients { "MyString" }
    inventors { "MyString" }
    manufacturers { "MyString" }
    image { "MyText" }
    wiki { "MyText" }
  end
end
