class UserAttribute < ActiveRecord::Base
    validates :user_id, 	    presence: true
    validates :attribute_id, 	presence: true
end
