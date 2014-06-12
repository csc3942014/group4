class ResultsController < ApplicationController
    def index
        @test_session = TestSession.find(params[:test_session_id])
    end
end
