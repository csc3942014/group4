class AddTestUnitToCoordinate < ActiveRecord::Migration
  def change
      add_column :coordinates, :test_suite_id, :integer
  end
end
