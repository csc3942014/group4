class CreateCoordinates < ActiveRecord::Migration
  def change
    create_table :coordinates do |t|
      t.integer :word_id
      t.decimal :x_coordinate
      t.decimal :y_coordinate

      t.timestamps
    end
  end
end
