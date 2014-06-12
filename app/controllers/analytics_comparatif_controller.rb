class AnalyticsComparatifController < ApplicationController
  def index
  end
    
  def apply_main_filters
      @name = params[:filter].to_s
      @type = params[:type].to_s
      @ak = Keyboard.all
      @aa = Attribute.all
      
      if @name === 'keyboards'
          render :partial => "compare_keyboards", :locals => { :allKeyboards => @ak, :n => @name, :typeF => @type }
      elsif @name === 'tests'
          
      else #name is attribute
          render :partial => "compare_attributes", :locals => { :allKeyboards => @ak, :n => @name, :typeF => @type, :allAttributes => @aa }
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
      	  
          @duration = 0
          #generate duration chart data
          @testSessions1.each do |tSess| 
              #get all the test units for this particular test session
          	  @allTU = TestUnit.where('test_session_id = ?', tSess.id)
         	  @allTU.each do |tu|
                	#get the word for this test unit
              		@word = Word.where('id = ?', tu.word_id)
              		@word.each do |wrd|
                  	    #add duration to durationChartData
                        if tu.end_time != nil && tu.start_time != nil
                   	    	duration = tu.end_time - tu.start_time
                        else
                            duration = 0
                        end
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
                  	    if tu.end_time != nil && tu.start_time != nil
                   	    	@duration = tu.end_time - tu.start_time
                        else
                            @duration = 0
                        end
                  	    if wrd.length < 10 && wrd.length > 0
                  	        @durationChartData2[wrd.length.to_s] += @duration
                   	    else 
                            @durationChartData2['10+'] += @duration
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
          
          @hardCode1 = {"0" => 0, "1" => 5, "2" => 6, "3" => 10, "4" => 11, "5" => 13, "6" => 17, "7" => 22, "8" => 26, "9" => 30, "10+" => 40}
          @hardCode2 = {"0" => 0, "1" => 5, "2" => 6, "3" => 7, "4" => 8, "5" => 9, "6" => 10, "7" => 10, "8" => 15, "9" => 25, "10+" => 40}
          #:dcData1 => @durationChartData1, :dcData2 => @durationChartData2 << replace the hardcodes
          render :partial => "compare_speed", :locals => { :name1 => @kbo.name, :name2 => @kbt.name, :dcData1 => @hardCode1, :dcData2 => @hardCode2 }
      else
      	@userPercepData1 = {'accuracy' => 0, 'ease' => 0, 'fun' => 0}
        @userPercepData2 = {'accuracy' => 0, 'ease' => 0, 'fun' => 0}
      	userPercepFrequency1 = 0
      	userPercepFrequency2 = 0
      
      	#generate chart data
      	@testSessions1.each do |tSess|
          
          #get user perception data from each test session
          #get user perception data from each test session
          if tSess.accuracy_ranking != nil
              @userPercepData1['accuracy'] += tSess.accuracy_ranking
          end
          if tSess.ease_ranking != nil
          	@userPercepData1['ease'] += tSess.ease_ranking
          end
          if tSess.fun_ranking != nil
          	@userPercepData1['fun'] += tSess.fun_ranking
          end
          userPercepFrequency1 += 1
        end
        @testSessions2.each do |tSess|
          
          if tSess.accuracy_ranking != nil
              @userPercepData2['accuracy'] += tSess.accuracy_ranking
          end
          if tSess.ease_ranking != nil
          	@userPercepData2['ease'] += tSess.ease_ranking
          end
          if tSess.fun_ranking != nil
          	@userPercepData2['fun'] += tSess.fun_ranking
          end
          userPercepFrequency2 += 1
        end
          render :partial => "compare_perceptions", :locals => { :name1 => @keyboard1[0].name, :name2 => @keyboard2[0].name, :upData1 => @userPercepData1, :upData2 => @userPercepData2 }
      
      end
  end
   
  def apply_sub_filters_attributes
      atrbs = params[:attributes]
      typeF = params[:typef].to_s
      @attributes = Attribute.all
      @allUsers = User.all
      @usersWithAtrbs = {}
      
      @allUsers.each do |usr| 
          @usersWithAtrbs['usr.id.to_s'] = 0
      end
      @concernedUsers = []
      atrbs.each do |i| 
          @allUsersWithAttributes = UserAttribute.where('attribute_id = ?', i.to_i)
          @allUsersWithAttributes.each do |usrA| 
              @usersWithAtrbs[usrA.user_id.to_s] += 1
          end
      end
      if @usersWithAtrbs.has_value?(atrbs.count)
          @userWithAtrbs.each do |ua| 
              if ua.value === atrbs.count
                  @concernedUsers.push(ua)
              end
          end
      end
      
      @concernedIDs = []
      @concernedUsers.each do |thisConcernedUser| 
          concernedIDs.push(thisConcernedUser.id)
      end
      @others = User.where("id NOT IN (?)", @concernedIDs)
          
      @testSessions1 = []
      @testSessions2 = []
          
      #get all test sessions performed by these users
      @concernedUsers.each do |cu|
          @testSessionsTemp = TestSession.where('user_id = ?', cu.user_id)
          @testSessionsTemp.each do |tst| 
              @testSessions1.push(tst)
          end
      end 
      #get all test sessions performed by these users
      @others.each do |other|
          @testSessionsTemp = TestSession.where('user_id = ?', other.to_i)
          @testSessionsTemp.each do |tst| 
              @testSessions2.push(tst)
          end
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
          render :partial => "compare_correctness", :locals => { :name1 => "All users with Attributes", :name2 => "All other Users", :pcData1 => @pieChartData1, :pcData2 => @pieChartData2 }
          
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
          render :partial => "compare_speed", :locals => { :name1 => "All users with Attributes", :name2 => "All other Users", :dcData1 => @durationChartData1, :dcData2 => @durationChartData2 }
      else
      	@userPercepData1 = {'accuracy' => 0, 'ease' => 0, 'fun' => 0}
        @userPercepData2 = {'accuracy' => 0, 'ease' => 0, 'fun' => 0}
      	userPercepFrequency1 = 0
      	userPercepFrequency2 = 0
      
      	#generate chart data
      	@testSessions1.each do |tSess|
          
          #get user perception data from each test session
          #get user perception data from each test session
          if tSess.accuracy_ranking != nil
              @userPercepData1['accuracy'] += tSess.accuracy_ranking
          end
          if tSess.ease_ranking != nil
          	@userPercepData1['ease'] += tSess.ease_ranking
          end
          if tSess.fun_ranking != nil
          	@userPercepData1['fun'] += tSess.fun_ranking
          end
          userPercepFrequency1 += 1
        end
        @testSessions2.each do |tSess|
          
          if tSess.accuracy_ranking != nil
              @userPercepData2['accuracy'] += tSess.accuracy_ranking
		   end
          if tSess.ease_ranking != nil
          	@userPercepData2['ease'] += tSess.ease_ranking
          end
          if tSess.fun_ranking != nil
          	@userPercepData2['fun'] += tSess.fun_ranking
          end
          userPercepFrequency2 += 1
        end
          render :partial => "compare_perceptions", :locals => { :name1 => "Users with Attributes", :name2 => "All Other Users", :upData1 => @userPercepData1, :upData2 => @userPercepData2 }
      end
  end
  
end
