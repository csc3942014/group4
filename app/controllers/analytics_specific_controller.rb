class AnalyticsSpecificController < ApplicationController
  def index
      @kbrds = Keyboard.all;
  end
    
  def reload_keyboards
      logger.debug "in reload_keyboards"
      @kbrds = Keyboard.all;
      
      render :partial => "filterby_keyboard", object: @kbrds
  end
    
    def reload_testsuites
        logger.debug "in reload_testsuites"
        @testsuites = TestSuite.all;
        
        render :partial => "filterby_testsuite", object: @testsuites
    end
    
    def reload_users
        logger.debug "in reload_user"
        @users = User.all;
        
        render :partial => "filterby_user", object: @users
    end
end
