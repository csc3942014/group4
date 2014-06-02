class AnalyticsGeneralController < ApplicationController
  def index
      
      @data5 = [
    {
        value: 30,
        color: "#D97041"
    },
    {
        value: 90,
        color: "#C7604C"
    },
    {
        value: 24,
        color: "#21323D"
    },
    {
        value: 58,
        color: "#9D9B7F"
    },
    {
        value: 82,
        color: "#7D4F6D"
    },
    {
        value: 8,
        color: "#584A5E"
    }
]
      
     @data2 = [
        { labels: ["January","February","March","April","May","June","July"],
	    datasets: [
		{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,1)",
			data: [65,59,90,81,56,55,40]
		},
		{
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,1)",
			data: [28,48,40,19,96,27,100]
		}
	    ]
            }
            
           ]
         
      @options2 = []
      
      
      
      
      
      
      
      @kbrds = Keyboard.all;
      @ts = TestSuite.all;
      
      @isTrue = @i == 0;
      

      @mtx = [];
      @data = Hash.new;
      @options = Hash.new;
      @kbrds.each do |kb|
          @data[kb.name.to_s] = {
              labels: ["Test Suite 1","TS 2","Double Letters","TS 5","TS 6","TS 7"],
                  datasets: [
                  {
                      fillColor: "rgba(220,220,220,0.5)",
                      strokeColor: "rgba(220,220,220,1)",
                      data: [2,15,22,1,15,30]
                            }
                            ]
                      }
          @options[kb.name.to_s] = {
                        element_id:     '@kb.name',
                        width:          "70px",
                            height:         "96px",
                            scaleOverride:  true,
	                        scaleSteps:     25,
	                        scaleStepWidth: 2,
	                        scaleStartValue: 0
                            }
          for @t in @ts 
              @mtx[kb.id, @t.id] = TestSession.where("test_suite_id = @t.id AND keyboard_id = @kb.id").count;
              
          end
      end
      
      
      
  end
    
  def generate_chart
      @keyboard = Keyboard.where('name = ?', params[:kname].to_s);
      @testSuites = TestSuite.all;
      
      render :partial => "usage_chart", object: @keyboard
  end
end