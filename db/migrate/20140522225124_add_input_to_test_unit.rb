class AddInputToTestUnit < ActiveRecord::Migration
  def change
    add_column :test_units, :input, :string
  end
end
