class Role < ActiveRecord::Base
    belongs_to :user_role

    validates :name, 		presence: true
end
