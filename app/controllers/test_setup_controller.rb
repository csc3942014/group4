class TestSetupController < ApplicationController
  def index
      @kbrds = Keyboard.all;
      @ts = TestSuite.all;
  end
end