class TestSetupController < ApplicationController
    
    def index
        @keyboards = Keyboard.all
        @test_suites = TestSuite.all 
        @words = Word.all
    end
    
    def reload_words
      @ids_query = TestSuiteWord.where('test_suite_id = ?', params[:test_suite_id].to_i)
      
      @word_ids = Array.new
      @ids_query.each do |word|
          if Word.exists?(word.word_id) then
              @word_ids.push(word.word_id)
          end
      end
      
      @words = Word.find(@word_ids)
      @word = Word.new

      render :partial => "test_suite_words", :locals => { :words => @words, :test_suite_id => params[:test_suite_id].to_i }
  end
    
    
    
end