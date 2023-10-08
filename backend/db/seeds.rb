require 'csv'
require 'open-uri'

start_date = Time.now

puts "Start importing data into db..."

Book.destroy_all
Character.in_batches.delete_all
Movie.destroy_all
Potion.in_batches.delete_all
Spell.in_batches.delete_all

puts "deleted old data..."

books = []
characters = []
movies = []
potions = []
spells = []

json_models = %w[books movies]
json_models.each do |model|
  Dir.glob("db/data/#{model}/*.json") do |file|
    data = JSON.parse(File.read(file))
    data[:slug] = File.basename(file, ".json")
    case model
    when "books"
      books << data
    when "movies"
      movies << data
    end
  end
end

base_url = "https://raw.githubusercontent.com/danielschuster-muc/scrabby/master/data/"
csv_models = %w[characters potions spells]
csv_models.each do |model|
  CSV.foreach(URI.parse("#{base_url}#{model}.csv").open, headers: true) do |row|
    case model
    when "characters"
      characters << row.to_h
    when "potions"
      potions << row.to_h
    when "spells"
      spells << row.to_h
    end
  end
end

unless books.empty?
  books.each do |book|
    finished_book = Book.create!(
      slug: book["title"].parameterize,
      title: book["title"],
      summary: book["summary"],
      author: book["author"],
      release_date: book["release_date"],
      dedication: book["dedication"],
      pages: book["pages"],
      cover: book["cover"],
      wiki: book["wiki"]
    )
    book["chapters"].each_with_index do |chapter, chapter_index|
      Chapter.create!(
        slug: chapter["title"].parameterize,
        title: chapter["title"],
        summary: chapter["summary"],
        order: chapter_index + 1,
        book: finished_book
      )
    end
  end
  puts "imported #{Book.count} books..."
end

unless characters.empty?
  upserted_characters = Character.upsert_all(characters)
  puts "imported #{upserted_characters.count} characters..."
end

unless movies.empty?
  movies.each do |movie|
    Movie.create!(
      slug: movie["title"].parameterize,
      title: movie["title"],
      summary: movie["summary"],
      directors: movie["directors"],
      screenwriters: movie["screenwriters"],
      producers: movie["producers"],
      cinematographers: movie["cinematographers"],
      editors: movie["editors"],
      distributors: movie["distributors"],
      music_composers: movie["music_composers"],
      release_date: movie["release_date"],
      running_time: movie["running_time"],
      budget: movie["budget"],
      box_office: movie["box_office"],
      rating: movie["rating"],
      trailer: movie["trailer"],
      poster: movie["poster"],
      wiki: movie["wiki"]
    )
  end
  puts "imported #{Movie.count} movies..."
end

unless potions.empty?
  upserted_potions = Potion.upsert_all(potions)
  puts "imported #{upserted_potions.count} potions..."
end

unless spells.empty?
  upserted_spells = Spell.upsert_all(spells)
  puts "imported #{upserted_spells.count} spells..."
end

puts "finished in #{Time.now - start_date}s!"
