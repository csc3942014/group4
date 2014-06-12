class TestManagerController < ApplicationController
  def index
      @test_suites = TestSuite.all
      @words = Word.all
  end

  def reload_suites
      @test_suites = TestSuite.all

      render :partial => "test_suites", object: @test_suites
  end

  def import
      Words.import(params[:file])
  end
  
  def reload_words
      @ids_query = TestSuiteWord.where('test_suite_id = ?', params[:test_suite_id].to_i)
      
      @word_ids = Array.new
      @ids_query.each do |word|
          if Word.exists?(word.word_id) then
              @word_ids.push(word.word_id)
          end
      end
      
      @words = Word.find(@word_ids)
      @word = Word.new

      render :partial => "test_suite_words", :locals => { :words => @words, :test_suite_id => params[:test_suite_id].to_i }
  end
      
  def delete_word      
      test_suite_id = params[:test_suite_id].to_i
      word_id = params[:word_id].to_i
      
      if TestSuiteWord.where(word_id: word_id).count <= 1 then
          Word.find(word_id).destroy
      end
      
      @test_suite_word = TestSuiteWord.find_by_test_suite_id(test_suite_id)
      test_suite_id = @test_suite_word.test_suite_id
      @test_suite_word.destroy
      
      render json: { test_suite_id: test_suite_id }
  end
end