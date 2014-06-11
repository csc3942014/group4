class TestingController < ApplicationController
  
    def index
        
        @test_session = TestSession.find(params[:test_session_id])
     	@keyboard = Keyboard.find(@test_session.keyboard_id)

        @test_suite_words = TestSuiteWord.where(test_suite_id: @test_session.test_suite_id)
        
        logger.debug "////BEGING////"
        
        #for each test_suite_word in @test_suite_words do
        #    word = Word.find(test_suite_word.word_id)
        #    add the word to an array
        #end
        
        logger.debug "////END////"
        
        #@words = the array you got
      	@words = Word.all

    end
    
end
