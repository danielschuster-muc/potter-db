class CreateChapters < ActiveRecord::Migration[7.0]
  def change
    create_table :chapters, id: :uuid do |t|
      t.string :slug
      t.string :title
      t.text :summary
      t.integer :order
      t.references :book, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
    add_index :chapters, :slug, unique: true
  end
end
