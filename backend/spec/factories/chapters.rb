FactoryBot.define do
  factory :chapter do
    slug { "an-example-chapter" }
    title { "An example chapter" }
    book
  end
end
