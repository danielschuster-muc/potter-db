class CreateSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :spells, id: :uuid do |t|
      t.string :slug
      t.string :name
      t.string :incantation
      t.string :category
      t.string :effect
      t.string :light
      t.string :hand
      t.string :creator
      t.text :image
      t.text :wiki

      t.timestamps
    end
    add_index :spells, :slug, unique: true
  end
end
