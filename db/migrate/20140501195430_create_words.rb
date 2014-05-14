class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
      t.string :word                 , :null => false
      t.integer :length              , :null => false
      t.integer :consecutive_letters , :null => false

      t.timestamps
    end
  end
end
