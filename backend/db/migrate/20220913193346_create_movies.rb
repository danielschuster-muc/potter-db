class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies, id: :uuid do |t|
      t.string :slug
      t.string :title
      t.text :summary
      t.text :directors, array: true, default: []
      t.text :screenwriters, array: true, default: []
      t.text :producers, array: true, default: []
      t.text :cinematographers, array: true, default: []
      t.text :editors, array: true, default: []
      t.text :distributors, array: true, default: []
      t.text :music_composers, array: true, default: []
      t.date :release_date
      t.string :running_time
      t.string :budget
      t.string :box_office
      t.string :rating
      t.integer :order
      t.string :trailer
      t.text :poster
      t.string :wiki

      t.timestamps
    end
    add_index :movies, :slug, unique: true
  end
end
