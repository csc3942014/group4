class TestSession < ActiveRecord::Base
    validates :user_id, 			presence: true
    validates :accuracy_ranking, 	presence: true
    validates :ease_ranking,	 	presence: true
    validates :fun_ranking,		 	presence: true
    validates :test_number,		 	presence: true
    validates :test_suite_id,	 	presence: true
end
