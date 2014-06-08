class TestUnit < ActiveRecord::Base
    validates :test_session_id, 	presence: true
    validates :word_id,			 	presence: true
    validates :num_backspace,		presence: true
   
    def self.to_csv(options = {})
      CSV.generate(options) do |csv|
          csv << column_names
          all.each do |testunit|
              csv << testunit.attributes.values_at(*column_names)
          end
        end
    end
 
    
end
