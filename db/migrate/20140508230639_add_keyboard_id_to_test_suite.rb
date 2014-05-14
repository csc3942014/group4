class AddKeyboardIdToTestSuite < ActiveRecord::Migration
  def change
    add_column :test_suites, :keyboard_id, :integer
  end
end
