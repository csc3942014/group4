class UserRole < ActiveRecord::Base
    validates :role_id, 	presence: true
    validates :user_id, 	presence: true
end
