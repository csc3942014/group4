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
      @userPercepData = [0,0,0]
      @userPercepFrequency = [0,0,0]
      
      #generate chart data
      @testSessions.each do |tSess|
          #get user perception data from each test session
          @userPercepData[0] += tSess.accuracy_ranking
          @userPercepData[1] += tSess.ease_ranking
          @userPercepData[2] += tSess.fun_ranking
          @userPercepFrequency[0] += 1
          @userPercepFrequency[1] += 1
          @userPercepFrequency[2] += 1
          
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
                  
                  #add duration to durationChartData
                  duration = tu.end_time - tu.start_time
                  if wrd.length < 10 && wrd.length > 0
                      @durationChartData[wrd.length.to_s] += duration
                  else 
                      @durationChartData['10+'] += duration
                  end 
              end
          end
      end
      
      #turn totals into averages for the duration chart
      @durationChartData.each do |key, duration|
          @durationChartData[key] = ( @durationChartData[key] / @durationChartFrequency[key] )
      end
      
      #turn user perception rankings into averages
     
      
      render :partial => "open_keyboard_stats", :locals => { :pcData => @pieChartData, :keyboard => @keyboard, :dcData => @durationChartData } 
  end

end