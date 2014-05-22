class TestSetupController < ApplicationController
  def new
  end

  def create
  end
    
  def index
      @kbrds = Keyboard.all;
      @ts = TestSuite.all;
  end
end
