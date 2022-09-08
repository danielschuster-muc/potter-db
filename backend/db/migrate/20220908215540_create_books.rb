class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books, id: :uuid do |t|
      t.string :slug
      t.string :title
      t.text :summary
      t.date :release_date
      t.string :dedication
      t.integer :pages
      t.integer :order
      t.text :cover_url

      t.timestamps
    end
    add_index :books, :slug, unique: true
  end
end
