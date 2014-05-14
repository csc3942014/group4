class CreateTestSuites < ActiveRecord::Migration
  def change
    create_table :test_suites do |t|
      t.string :name, :null => false

      t.timestamps
    end
  end
end
