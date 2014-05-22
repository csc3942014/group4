class TestManagerController < ApplicationController
  def index
      @test_suites = TestSuite.all
  end
end
