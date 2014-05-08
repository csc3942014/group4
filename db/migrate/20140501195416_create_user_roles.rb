class CreateUserRoles < ActiveRecord::Migration
  def change
    create_table :user_roles do |t|
      t.string :name
      t.integer :role_id, :null => false
      t.integer :user_id, :null => false

      t.timestamps
    end
    add_index :user_roles, :name
    add_index :user_roles, :role_id
    add_index :user_roles, :user_id
  end
end
