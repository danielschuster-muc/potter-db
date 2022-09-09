start_date = Time.now
puts "Importing data into db..."

Character.in_batches.delete_all
Potion.in_batches.delete_all
Spell.in_batches.delete_all
Book.destroy_all

puts "Deleted all old data..."

books = []
characters = []
potions = []
spells = []
models = %w[books characters potions spells]
models.each do |model|
  Dir.glob("db/data/#{model}/*.json") do |file|
    data = JSON.parse(File.read(file))
    data[:slug] = File.basename(file, ".json")

    case model
    when "books"
      books << data
    when "characters"
      characters << data
    when "potions"
      potions << data
    when "spells"
      spells << data
    end
  end
end

unless books.empty?
  books.each_with_index do |book, book_index|
    finished_book = Book.create!(
      slug: book["title"].parameterize,
      title: book["title"],
      summary: book["summary"],
      release_date: book["release_date"],
      dedication: book["dedication"],
      pages: book["pages"], order: book_index + 1,
      cover_url: book["cover_url"]
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
end

unless characters.empty?
  upserted_characters = Character.upsert_all(characters)
  puts "Imported #{upserted_characters.count} (tried: #{characters.count} / total: #{Character.count}) characters in #{Time.now - start_date}s"
end

unless potions.empty?
  upserted_potions = Potion.upsert_all(potions)
  puts "Imported #{upserted_potions.count} (tried: #{potions.count} / total: #{Potion.count}) potions in #{Time.now - start_date}s"
end

unless spells.empty?
  upserted_spells = Spell.upsert_all(spells)
  puts "Imported #{upserted_spells.count} (tried: #{spells.count} / total: #{Spell.count}) spells in #{Time.now - start_date}s"
end

puts "Finished in #{Time.now - start_date}s"
