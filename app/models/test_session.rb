class TestSession < ActiveRecord::Base
    validates :user_id, 			presence: true
    validates :test_suite_id,	 	presence: true
    validates :keyboard_id,	 	    presence: true
    
    def self.to_csv(options = {})
        CSV.generate do |csv|
            csv << column_names
            all.each do |testsession|
                csv << testsession.attributes.values_at(*column_names)
            end
        end
    end
        
end

