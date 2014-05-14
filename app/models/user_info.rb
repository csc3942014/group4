class UserInfo < ActiveRecord::Base
    validates :user_id, 	presence: true
    validates :first_name, 	:uniqueness => true, presence: true
    validates :first_name, 	:uniqueness => true, presence: true
    validates :email, 		:uniqueness => true, presence: true
end
