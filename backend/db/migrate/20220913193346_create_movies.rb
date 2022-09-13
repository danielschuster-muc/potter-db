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
      t.text :edited_by, array: true, default: []
      t.text :distributed_by, array: true, default: []
      t.text :music_by, array: true, default: []
      t.date :release_date
      t.string :running_time
      t.string :budget
      t.string :box_office
      t.string :rating
      t.text :poster

      t.timestamps
    end
    add_index :movies, :slug, unique: true
  end
end
