start_date = Time.now
puts "Importing data into db..."

Book.destroy_all
Character.in_batches.delete_all
Movie.destroy_all
Potion.in_batches.delete_all
Spell.in_batches.delete_all

puts "Deleted all old data..."

books = []
characters = []
movies = []
potions = []
spells = []
models = %w[books characters movies potions spells]
models.each do |model|
  Dir.glob("db/data/#{model}/*.json") do |file|
    data = JSON.parse(File.read(file))
    data[:slug] = File.basename(file, ".json")

    case model
    when "books"
      books << data
    when "characters"
      characters << data
    when "movies"
      movies << data
    when "potions"
      potions << data
    when "spells"
      spells << data
    end
  end
end

unless books.empty?
  current_start_date = Time.now
  books.each_with_index do |book, book_index|
    finished_book = Book.create!(
      slug: book["title"].parameterize,
      title: book["title"],
      summary: book["summary"],
      author: book["author"],
      release_date: book["release_date"],
      dedication: book["dedication"],
      pages: book["pages"],
      order: book_index + 1,
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
  puts "Imported #{Book.count} books in #{Time.now - current_start_date}s"
end

unless characters.empty?
  current_start_date = Time.now
  upserted_characters = Character.upsert_all(characters)
  puts "Imported #{upserted_characters.count} characters in #{Time.now - current_start_date}s"
end

unless movies.empty?
  current_start_date = Time.now
  movies.each_with_index do |movie, movie_index|
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
      order: movie_index + 1,
      trailer: movie["trailer"],
      poster: movie["poster"],
      wiki: movie["wiki"]
    )
  end
  puts "Imported #{Movie.count} movies in #{Time.now - current_start_date}s"
end

unless potions.empty?
  current_start_date = Time.now
  upserted_potions = Potion.upsert_all(potions)
  puts "Imported #{upserted_potions.count} potions in #{Time.now - current_start_date}s"
end

unless spells.empty?
  current_start_date = Time.now
  upserted_spells = Spell.upsert_all(spells)
  puts "Imported #{upserted_spells.count} spells in #{Time.now - current_start_date}s"
end

puts "Finished in #{Time.now - start_date}s"
