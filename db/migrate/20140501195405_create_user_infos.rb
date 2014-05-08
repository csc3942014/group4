class CreateUserInfos < ActiveRecord::Migration
  def change
    create_table :user_infos do |t|
      t.integer :user_id     , :null => false
      t.string :first_name   , :unique => true, :null => false
      t.string :last_name    , :unique => true, :null => false
      t.string :email        , :unique => true, :null => false

      t.timestamps
    end
    add_index :user_infos, :user_id
  end
end
