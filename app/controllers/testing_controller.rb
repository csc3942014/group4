class TestingController < ApplicationController
  
    def index        
        @test_session = TestSession.find(params[:test_session_id])
        
        test_suite_words = TestSuiteWord.where(test_suite_id: @test_session.test_suite_id)
        word_ids = Array.new
        test_suite_words.each do |test_suite_word|
            word_ids.push(test_suite_word.word_id)
        end
        @words = Word.where(id: word_ids)
    end
end
