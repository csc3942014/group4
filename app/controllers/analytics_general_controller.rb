class AnalyticsGeneralController < ApplicationController
  def index 
 
      #get all keyboards and test suites
      @kbrds = Keyboard.all;
      @ts = TestSuite.all;

      #initialize the matrix that will store data necessary to generate all general analytics charts
      @mtx = Array.new(@kbrds.count) {Array.new(5, 0.0)};
      
      #loop through each keyboard
      i = 0 #counter used for index
      for kb in @kbrds
          x = 5
          for t in @ts
              #clear the first default item out of the matrix
              if x == 5
                  @mtx[i] = [];
              end
              #push to the array for this keyboard, the name of the test suite, and 
              #the number of tests completed for this test suite and keyboard
              @mtx[i].push([t.name.to_s, TestSession.where("test_suite_id = ? AND keyboard_id = ?", t.id, kb.id).count]);
              x = x + 1
          end
          i = i+1
      end   
  end 
end


