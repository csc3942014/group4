class TestSetupController < ApplicationController
  def index
      @keyboards = Keyboard.all
      @test_suites = TestSuite.all 
  end
end