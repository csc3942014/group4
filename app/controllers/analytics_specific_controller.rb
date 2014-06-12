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
      
      #get access to the selected keyboard
      @keyboard = Keyboard.where('id = ?', params[:keyboard_id].to_i)
      #get all test sessions performed for this keyboard
      @testSessions = TestSession.where('keyboard_id = ?', params[:keyboard_id].to_i)
      
      #declare the hashtable for the pie chart data
      @pieChartData = {'Correct' => 0, 'Incorrect' => 0}
      @durationChartData = {'0' => 0.0, '1' => 0.0, '2' => 0.0, '3' => 0.0, '4' => 0.0, '5' => 0.0, '6' => 0.0, '7' => 0.0, '8' => 0.0, '9' => 0.0, '10+' => 0.0}
      @durationChartFrequency = {'0' => 0, '1' => 0, '2' => 0, '3' => 0, '4' => 0, '5' => 0, '6' => 0, '7' => 0, '8' => 0, '9' => 0, '10+' => 0}
      @userPercepData = {'accuracy' => 0, 'ease' => 0, 'fun' => 0}
      userPercepFrequency = 0
   
      logger.debug "Test Sessions: #{@testSessions}"
      
      #generate chart data
      @testSessions.each do |tSess|
          
          #get user perception data from each test session
          if tSess.accuracy_ranking != nil
              @userPercepData['accuracy'] += tSess.accuracy_ranking
          end
          if tSess.ease_ranking != nil
          	@userPercepData['ease'] += tSess.ease_ranking
          end
          if tSess.fun_ranking != nil
          	@userPercepData['fun'] += tSess.fun_ranking
          end
          userPercepFrequency += 1
          
          @debuggingP = []
          #get all the test units for this particular test session
          @allTU = TestUnit.where('test_session_id = ?', tSess.id)
          @allTU.each do |tu|
              #get the word for this test unit
              @word = Word.where('id = ?', tu.word_id)
              @word.each do |wrd|
                  #if the user typed the word correctly, increment correct value in hashtable, increment incorrect otherwise
                  if tu.input === wrd.word
                      @pieChartData['Correct'] += 1
                  else
                      @pieChartData['Incorrect'] += 1
                  end
                  
                  @duration = 0
                  #add duration to durationChartData
                  if tu.end_time != nil && tu.start_time != nil
                      @duration = (tu.end_time.to_time - tu.start_time.to_time)
                      @debuggingP.push(tu.end_time.to_time - tu.start_time.to_time)
                  else
                      duration = 0
                  end
                  if wrd.length < 10 && wrd.length > 0
                      @durationChartData['wrd.length.to_s'] = @duration + @durationChartData[wrd.length.to_s]
                  else 
                      @durationChartData['10+'] = @duration.to_i + @durationChartData['10+']
                  end 
              end
          end
      end
      
      #turn totals into averages for the duration chart
      @durationChartData.each do |key, duration|
          if @durationChartData[key] != nil && @durationChartFrequency[key] != nil
          	 @durationChartData[key] = ( @durationChartData[key] / @durationChartFrequency[key] )
          end
      end

      #turn totals into averages for the user perception rankings (if any exist)
      if userPercepFrequency > 0 
          @userPercepData.each do |key, total| 
              @userPercepData[key] = ( @userPercepData[key] / userPercepFrequency )
          end
      end
      
      @hardCode = {"0" => 0, "1" => 5, "2" => 6, "3" => 10, "4" => 11, "5" => 13, "6" => 17, "7" => 22, "8" => 26, "9" => 30, "10+" => 40}
      
      #:dcData => @durationChartData << replace the @hardcode with this
      render :partial => "open_keyboard_stats", :locals => { :pcData => @pieChartData, :keyboard => @keyboard, :dcData => @hardCode, :userPerceptions => @userPercepData, :dp => @debuggingP } 
  end
    
  def loadup_user
      @user = User.where('id = ?', params[:user_id].to_i)
      @userAttributes = UserAttribute.where('user = ?', params[:user_id].to_i)
      @allTestSessions = TestSession.where('user_id = ?', params[:user_id].to_i)
      
    
      render :partial => "open_user_stats", :locals => { :user => @user, :allTests => @allTestSessions, :userAttributes => @userAttributes }
  end

end