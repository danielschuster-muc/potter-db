class RemoveOrderFromBooksAndMovies < ActiveRecord::Migration[7.0]
  def change
    remove_column :books, :order, :integer
    remove_column :movies, :order, :integer
  end
end
