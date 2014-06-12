class Word < ActiveRecord::Base
    belongs_to :test_unit
    belongs_to :test_suite_word

    validates :word, 				presence: true
    validates :length, 				presence: true
    validates :consecutive_letters, presence: true
    
	def self.import(file)
		CSV.foreach(file.path, headers: true) do |row|
            Words.create! row.to_hash
		end
	end
end