class TestingController < ApplicationController
  
    def index
      @test_suites = TestSuite.all
      @words = Word.all
        
      @keyboards = Keyboard.all
    end
    
end
