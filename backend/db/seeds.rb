start_date = Time.now

Character.in_batches.delete_all
Spell.in_batches.delete_all

characters = []
spells = []
models = %w[characters spells]
models.each do |model|
  Dir.glob("db/data/#{model}/*.json") do |file|

    data = JSON.parse(File.read(file))
    data[:slug] = File.basename(file, ".json")

    case model
    when "characters"
      characters << data
    when "spells"
      spells << data
    end
  end
end

unless characters.empty?
  inserted_characters = Character.upsert_all(characters) # , unique_by: :slug
  puts "inserted #{inserted_characters.count} (tried: #{characters.count} / total: #{Character.count}) characters in #{Time.now - start_date}s"
end

unless spells.empty?
  inserted_spells = Spell.upsert_all(spells, unique_by: :slug) unless spells.empty?
  puts "inserted #{inserted_spells.count} (tried: #{spells.count} / total: #{Spell.count}) spells in #{Time.now - start_date}s"
end
