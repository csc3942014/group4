class CreateTestUnits < ActiveRecord::Migration
  def change
    create_table :test_units do |t|
      t.integer :test_session_id, :null => false
      t.integer :word_id        , :null => false
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
    add_index :test_units, :test_session_id
  end
end
