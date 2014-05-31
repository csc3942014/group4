class AnalyticsGeneralController < ApplicationController
  def index
      @kbrds = Keyboard.all;
      @ts = TestSuite.all;
      
      @isTrue = @i == 0;
      

      @mtx = [];
      for @kb in @kbrds
          for @t in @ts 
              @mtx[@kb.id, @t.id] = TestSession.where("test_suite_id = @t.id AND keyboard_id = @kb.id").count;
          end
      end
  end
end