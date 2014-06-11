class Coordinate < ActiveRecord::Base
    validates :word_id, 			presence: true
    validates :test_suite_id,	 	presence: true
    validates :x_coordinate,	 	presence: true
    validates :y_coordinate,	 	presence: true
end
