class Word < ActiveRecord::Base
    belongs_to :test_unit

    validates :word, 				presence: true
    validates :length, 				presence: true
    validates :consecutive_letters, presence: true
end
