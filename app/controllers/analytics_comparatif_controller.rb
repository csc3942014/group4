class AnalyticsComparatifController < ApplicationController
  def index
  end
    
  def apply_main_filters
      @name = params[:filter].to_s
      @type = params[:type].to_s
      @ak = Keyboard.all
      
      if @name === 'keyboards'
          render :partial => "compare_keyboards", :locals => { :allKeyboards => @ak, :n => @name, :typeF => @type }
      elsif name === 'tests'
          
      else
          
      end
  end
    
  def apply_sub_filters_kb
      kb1 = params[:kb1].to_s
      kb2 = params[:kb2].to_s
      typeF = params[:typef].to_s
      
      #get access to the selected keyboards
      @keyboard1 = Keyboard.where('name = ?', params[:kb1].to_s)
      @keyboard2 = Keyboard.where('name = ?', params[:kb2].to_s)
      @testSessions1 = nil
      @testSessions2 = nil
      #get all test sessions performed for these keyboard
      @keyboard1.each do |kb| 
          @testSessions1 = TestSession.where('keyboard_id = ?', kb.id)
      end
      @keyboard2.each do |kb| 
          @testSessions2 = TestSession.where('keyboard_id = ?', kb.id)
      end
      
      #change the hardcoded correctness
      if typeF === 'correctness'
          #declare the hashtable for the pie chart data
      	  @pieChartData1 = {'Correct' => 0, 'Incorrect' => 0}
          @pieChartData2 = {'Correct' => 0, 'Incorrect' => 0}
          
          #generate pie chart data
          @testSessions1.each do |tSess|
            #get all the test units for this particular test session
          	@allTU = TestUnit.where('test_session_id = ?', tSess.id)
			@allTU.each do |tu|
              	#get the word for this test unit
              	@word = Word.where('id = ?', tu.word_id)
              	@word.each do |wrd|
                	#if the user typed the word correctly, increment correct value in hashtable, increment incorrect otherwise
                    if tu.input === wrd.word
                        @pieChartData1['Correct'] += 1
                    else
                        @pieChartData1['Incorrect'] += 1
                    end
                end
            end
          end
          @testSessions2.each do |tSess|
            #get all the test units for this particular test session
          	@allTU = TestUnit.where('test_session_id = ?', tSess.id)
			@allTU.each do |tu|
              	#get the word for this test unit
              	@word = Word.where('id = ?', tu.word_id)
              	@word.each do |wrd|
                	#if the user typed the word correctly, increment correct value in hashtable, increment incorrect otherwise
                    if tu.input === wrd.word
                        @pieChartData2['Correct'] += 1
                    else
                        @pieChartData2['Incorrect'] += 1
                    end
                end
            end
          end
          @kbo = @keyboard1[0]
          @kbt = @keyboard2[0] 
          render :partial => "compare_correctness", :locals => { :name1 => @kbo.name, :name2 => @kbt.name, :pcData1 => @pieChartData1, :pcData2 => @pieChartData2 }
          
      elsif typeF === 'speed'
          @durationChartData1 = {'0' => 0.0, '1' => 0.0, '2' => 0.0, '3' => 0.0, '4' => 0.0, '5' => 0.0, '6' => 0.0, '7' => 0.0, '8' => 0.0, '9' => 0.0, '10+' => 0.0}
          @durationChartData2 = {'0' => 0.0, '1' => 0.0, '2' => 0.0, '3' => 0.0, '4' => 0.0, '5' => 0.0, '6' => 0.0, '7' => 0.0, '8' => 0.0, '9' => 0.0, '10+' => 0.0}
          @durationChartFrequency1 = {'0' => 0, '1' => 0, '2' => 0, '3' => 0, '4' => 0, '5' => 0, '6' => 0, '7' => 0, '8' => 0, '9' => 0, '10+' => 0}
          @durationChartFrequency2 = {'0' => 0, '1' => 0, '2' => 0, '3' => 0, '4' => 0, '5' => 0, '6' => 0, '7' => 0, '8' => 0, '9' => 0, '10+' => 0}
      	  
          #generate duration chart data
          @testSessions1.each do |tSess| 
              #get all the test units for this particular test session
          	  @allTU = TestUnit.where('test_session_id = ?', tSess.id)
         	  @allTU.each do |tu|
                	#get the word for this test unit
              		@word = Word.where('id = ?', tu.word_id)
              		@word.each do |wrd|
                  	    #add duration to durationChartData
                   	    duration = tu.end_time - tu.start_time
                  	    if wrd.length < 10 && wrd.length > 0
                  	        @durationChartData1[wrd.length.to_s] += duration
                   	    else 
                            @durationChartData1['10+'] += duration
                        end 
              		end
          	  end
      	  end
          @testSessions2.each do |tSess| 
              #get all the test units for this particular test session
          	  @allTU = TestUnit.where('test_session_id = ?', tSess.id)
         	  @allTU.each do |tu|
                	#get the word for this test unit
              		@word = Word.where('id = ?', tu.word_id)
              		@word.each do |wrd|
                  	    #add duration to durationChartData
                   	    duration = tu.end_time - tu.start_time
                  	    if wrd.length < 10 && wrd.length > 0
                  	        @durationChartData2[wrd.length.to_s] += duration
                   	    else 
                            @durationChartData2['10+'] += duration
                        end 
              		end
          	  end
      	  end
          #turn totals into averages for the duration chart
      	  @durationChartData1.each do |key, duration|
          	  @durationChartData1[key] = ( @durationChartData1[key] / @durationChartFrequency1[key] )
      	  end
          @durationChartData2.each do |key, duration|
          	  @durationChartData2[key] = ( @durationChartData2[key] / @durationChartFrequency2[key] )
      	  end
          @kbo = @keyboard1[0]
          @kbt = @keyboard2[0] 
          render :partial => "compare_speed", :locals => { :name1 => @kbo.name, :name2 => @kbt.name, :dcData1 => @durationChartData1, :dcData2 => @durationChartData2 }
      else
      	@userPercepData = {'accuracy' => 0, 'ease' => 0, 'fun' => 0}
      	userPercepFrequency = 0
      
      	#generate chart data
      	@testSessions.each do |tSess|
          
          #get user perception data from each test session
          @userPercepData['accuracy'] += tSess.accuracy_ranking
          @userPercepData['ease'] += tSess.ease_ranking
          @userPercepData['fun'] += tSess.fun_ranking
          userPercepFrequency += 1
        end
      end
  end
end
