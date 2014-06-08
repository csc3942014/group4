class Drops < ActiveRecord::Migration
  def change
      drop_table :test_sessions
      
      create_table :test_sessions do |t|
          t.integer :user_id         , :null => false
          t.integer :test_number     , :null => false
          t.integer :ease_ranking
          t.integer :fun_ranking
          t.integer :accuracy_ranking
          t.integer :test_suite_id   , :null => false
          t.integer :keyboard_id     , :null => false

          t.timestamps
      end
        add_index :test_sessions, :user_id
        add_index :test_sessions, :test_suite_id
  end
end