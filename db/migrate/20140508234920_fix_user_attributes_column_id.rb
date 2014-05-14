class FixUserAttributesColumnId < ActiveRecord::Migration
  def change
      remove_column :user_attributes, :name
  end
end
