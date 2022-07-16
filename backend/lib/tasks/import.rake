namespace :import do

  desc "Import data from json files"
  task :json => [:environment] do
    start_date = Time.now
    puts "Importing data into db..."

    Character.in_batches.delete_all
    Spell.in_batches.delete_all

    puts "Deleted all old data..."

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
      upserted_characters = Character.upsert_all(characters) # , unique_by: :slug
      puts "Imported #{upserted_characters.count} (tried: #{characters.count} / total: #{Character.count}) characters in #{Time.now - start_date}s"
    end

    unless spells.empty?
      upserted_spells = Spell.upsert_all(spells)
      puts "Imported #{upserted_spells.count} (tried: #{spells.count} / total: #{Spell.count}) spells in #{Time.now - start_date}s"
    end

    puts "Finished in #{Time.now - start_date}s"
  end
end
