class TestManagerController < ApplicationController
  def index
      @test_suites = TestSuite.all
      @words = Word.all
  end
    
  def reload_words
      logger.debug "elo"
      
      @ids_query = TestSuiteWord.where('test_suite_id = ?', params[:test_suite_id].to_i)
      
      @word_ids = Array.new
      @ids_query.each do |word|
          @word_ids.push(word.word_id)
      end
      
      @words = Word.find(@word_ids)
      @word = Word.new

      render :partial => "test_suite_words", object: @words
  end
end
