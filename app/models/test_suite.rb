class TestSuite < ActiveRecord::Base
    belongs_to :test_session

    validates :name, 				presence: true
end
