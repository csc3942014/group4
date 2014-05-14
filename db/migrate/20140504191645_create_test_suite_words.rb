class CreateTestSuiteWords < ActiveRecord::Migration
  def change
    create_table :test_suite_words do |t|
      t.integer :test_suite_id,   :null => false
      t.integer :word_id,         :null => false

      t.timestamps
    end
    add_index :test_suite_words, :test_suite_id
  end
end
