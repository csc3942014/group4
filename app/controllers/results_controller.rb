class ResultsController < ApplicationController
    def index
        @test_session = TestSession.find(168)
    end

    def load_results
        @test_session = TestSession.find(168)

        render :partial => "results", object: @test_session
    end
end
