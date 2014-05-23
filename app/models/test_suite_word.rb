class TestSuiteWord < ActiveRecord::Base
    validates :test_suite_id, 		presence: true
    validates :word_id, 		    presence: true
end
