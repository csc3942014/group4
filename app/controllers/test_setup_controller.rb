class TestSetupController < ApplicationController
  def new
  end

  def create
  end
    
  def index
      @kbrds = Keyboard.all;
  end
end
