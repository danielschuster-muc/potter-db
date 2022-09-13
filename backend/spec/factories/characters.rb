FactoryBot.define do
  factory :character do
    slug { Faker::Lorem.characters(number: 50) }
    name { "MyString" }
    born { "MyString" }
    died { "MyString" }
    gender { "MyString" }
    species { "MyString" }
    height { "MyString" }
    weight { "MyString" }
    hair_color { "MyString" }
    eye_color { "MyString" }
    skin_color { "MyString" }
    blood_status { "MyString" }
    marital_status { "MyString" }
    nationality { "MyText" }
    animagus { "MyString" }
    boggart { "MyString" }
    house { "MyString" }
    patronus { "MyString" }
    alias_names { "MyText" }
    family_members { "MyText" }
    jobs { "MyText" }
    romances { "MyText" }
    titles { "MyText" }
    wands { "MyText" }
    image { "MyText" }
    wiki { "MyText" }
  end
end
