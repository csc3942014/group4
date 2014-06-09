class RemoveNumber < ActiveRecord::Migration
  def change
      remove_column :test_sessions, :test_number
  end
end
