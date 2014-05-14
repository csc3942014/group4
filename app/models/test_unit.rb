class TestUnit < ActiveRecord::Base
    validates :test_session_id, 	presence: true
    validates :word_id,			 	presence: true
    validates :num_backspace,		presence: true
end
