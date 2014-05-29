class AnalyticsGeneralController < ApplicationController
  def index
      @kbrds = Keyboard.all;
      @ts = TestSuite.all;
      
      ary = Array.new;
      for @kb in @kbrds
          for @t in @ts
              ary[@kb.id][@t.id] = TestSession.where("test_suite_id = @t.id AND keyboard_id = @kb.id");
          end
      end
  end
end