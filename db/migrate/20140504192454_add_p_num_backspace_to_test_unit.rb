class AddPNumBackspaceToTestUnit < ActiveRecord::Migration
  def change
      add_column :test_units, :num_backspace, :integer, :null => false
  end
end
