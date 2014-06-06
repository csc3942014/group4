class AnalyticsSpecificController < ApplicationController
    
  def index
      @kbrds = Keyboard.all
      @test_suites = TestSuite.all
  end
    
  def reload_keyboards
      @kbrds = Keyboard.all
      render :partial => "filterby_keyboard", object: @kbrds
  end
    
  def reload_testsuites
      @testsuites = TestSuite.all
      render :partial => "filterby_testsuite", object: @testsuites
  end
    
  def reload_users
      @users = User.all
      render :partial => "filterby_user", object: @users
  end
    
  def loadup_keyboard
      @keyboard = Keyboard.where('id = ?', params[:keyboard_id].to_i);
      render :partial => "open_keyboard_stats", object: @keyboard
  end
    
end
