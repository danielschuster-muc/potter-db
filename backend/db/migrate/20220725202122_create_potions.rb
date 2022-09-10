class CreatePotions < ActiveRecord::Migration[7.0]
  def change
    create_table :potions, id: :uuid do |t|
      t.string :slug
      t.string :name
      t.string :effect
      t.string :side_effects
      t.string :characteristics
      t.string :time
      t.string :difficulty
      t.string :ingredients
      t.string :inventors
      t.string :manufacturers
      t.text :image
      t.text :wiki

      t.timestamps
    end
    add_index :potions, :slug, unique: true
  end
end
