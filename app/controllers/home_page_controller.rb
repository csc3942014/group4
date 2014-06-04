class HomePageController < ApplicationController
  # ensure admin for other actions
  
    #before_filter :authenticate_user! #, :except => [:show, :index]

  # ensure user or admin logged in for these actions (:only option is optional)
  #before_filter :check_user_logged_in!, :only => [:show, :index]
    
  def index
      #@isAdmin = current_user.admin?
      #@person = User.find(params[:id])
      #@is_an_admin = (person.admin?)
      @is_an_admin = true

      @kbrds = Keyboard.all;
      @ts = TestSuite.all;
  end
    
  
    
end

