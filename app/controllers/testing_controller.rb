class TestingController < ApplicationController
  
    def index
        
      @keyboards = Keyboard.all
      @test_suites = TestSuite.all
      @words = Word.all
      
    end
    
end
