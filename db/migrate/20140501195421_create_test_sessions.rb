class CreateTestSessions < ActiveRecord::Migration
  def change
    create_table :test_sessions do |t|
      t.integer :user_id         , :null => false
      t.integer :test_number     , :null => false
      t.integer :ease_ranking    , :null => false
      t.integer :fun_ranking     , :null => false
      t.integer :accuracy_ranking, :null => false
      t.integer :test_suite_id   , :null => false
      t.integer :test_unit_id    , :null => false

      t.timestamps
    end
    add_index :test_sessions, :user_id
    add_index :test_sessions, :test_suite_id
    add_index :test_sessions, :test_unit_id
  end
end
