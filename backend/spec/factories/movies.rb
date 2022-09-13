FactoryBot.define do
  factory :movie do
    slug { Faker::Lorem.characters(number: 50) }
    title { "MyString" }
    summary { "MyText" }
    directors { "MyText" }
    screenwriters { "MyText" }
    producers { "MyText" }
    cinematographers { "MyText" }
    edited_by { "MyText" }
    distributed_by { "MyText" }
    music_by { "MyText" }
    release_date { "2022-09-13" }
    running_time { "MyString" }
    budget { "MyString" }
    box_office { "MyString" }
    rating { "MyString" }
    poster { "MyText" }
  end
end
