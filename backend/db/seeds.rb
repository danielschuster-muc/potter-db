start_date = Time.now
puts "Importing data into db..."

Character.in_batches.delete_all
Potion.in_batches.delete_all
Spell.in_batches.delete_all

puts "Deleted all old data..."

characters = []
potions = []
spells = []
models = %w[characters potions spells]
models.each do |model|
  Dir.glob("db/data/#{model}/*.json") do |file|
    data = JSON.parse(File.read(file))
    data[:slug] = File.basename(file, ".json")

    case model
    when "characters"
      characters << data
    when "potions"
      potions << data
    when "spells"
      spells << data
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
