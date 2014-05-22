class AddKeyboardToTestSession < ActiveRecord::Migration
  def change
    add_column :test_sessions, :keyboard_id, :integer
    remove_column :test_suites, :keyboard_id
  end
end
