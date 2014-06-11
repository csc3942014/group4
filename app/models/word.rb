class Word < ActiveRecord::Base
    belongs_to :test_unit
    belongs_to :test_suite_word

    validates :word, 				presence: true
    validates :length, 				presence: true
    validates :consecutive_letters, presence: true
    
    def self.import(file)
#  		spreadsheet = open_spreadsheet(file)
 # 		header = spreadsheet.row(1)
  #		(2..spreadsheet.last_row).each do |i|
   # 		row = Hash[[header, spreadsheet.row(i)].transpose]
    #        word = find_by_id(row["id"]) || new
     #       word.attributes = row.to_hash.slice(*accessible_attributes)
      #      word.save!
 		# end
 	CSV.foreach(file.path, headers: true) do |row|
        Words.add! row.to_hash
  end

	end

#	def self.open_spreadsheet(file)
 # 		case File.extname(file.original_filename)
  #			when ".csv" then Roo::Csv.new(file.path, nil, :ignore)
  #			when ".xls" then Roo::Excel.new(file.path, nil, :ignore)
  #			when ".xlsx" then Roo::Excelx.new(file.path, nil, :ignore)
  #			else raise "Unknown file type: #{file.original_filename}"
  #		end
	#end
end