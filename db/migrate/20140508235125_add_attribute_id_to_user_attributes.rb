class AddAttributeIdToUserAttributes < ActiveRecord::Migration
  def change
    add_column :user_attributes, :attribute_id, :integer
  end
end
