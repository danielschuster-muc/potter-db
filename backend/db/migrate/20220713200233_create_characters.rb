class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters, id: :uuid do |t|
      t.string :slug
      t.string :name
      t.string :born
      t.string :died
      t.string :gender
      t.string :species
      t.string :height
      t.string :weight
      t.string :hair_color
      t.string :eye_color
      t.string :skin_color
      t.string :blood_status
      t.string :marital_status
      t.text :nationality
      t.string :animagus
      t.string :boggart
      t.string :house
      t.string :patronus
      t.text :alias_names, array: true, default: []
      t.text :family_members, array: true, default: []
      t.text :jobs, array: true, default: []
      t.text :romances, array: true, default: []
      t.text :titles, array: true, default: []
      t.text :wands, array: true, default: []
      t.text :image
      t.text :wiki

      t.timestamps
    end
    add_index :characters, :slug, unique: true
  end
end
