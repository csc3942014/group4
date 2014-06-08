class TestSuiteWord < ActiveRecord::Base
    belongs_to :test_suite
    
    validates :test_suite_id, 		presence: true
    validates :word_id, 		    presence: true
end
