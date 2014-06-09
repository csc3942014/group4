class TestSession < ActiveRecord::Base
    validates :user_id, 			presence: true
    validates :test_suite_id,	 	presence: true
    validates :keyboard_id,	 	    presence: true
end
