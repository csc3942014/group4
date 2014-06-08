class Dropsess < ActiveRecord::Migration
  def change
      drop_table :test_sessions
  end
end
