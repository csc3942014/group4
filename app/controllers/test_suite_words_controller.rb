class TestSuiteWordsController < ApplicationController
  before_action :set_test_suite_word, only: [:show, :edit, :update, :destroy]

  # GET /test_suite_words
  # GET /test_suite_words.json
  def index
    @test_suite_words = TestSuiteWord.all
  end

  # GET /test_suite_words/1
  # GET /test_suite_words/1.json
  def show
  end

  # GET /test_suite_words/new
  def new
    @test_suite_word = TestSuiteWord.new
  end

  # GET /test_suite_words/1/edit
  def edit
  end

  # POST /test_suite_words
  # POST /test_suite_words.json
  def create
    @test_suite_word = TestSuiteWord.new(test_suite_word_params)

    respond_to do |format|
      if @test_suite_word.save
        format.html { redirect_to @test_suite_word, notice: 'Test suite word was successfully created.' }
        format.json { render :show, status: :created, location: @test_suite_word }
      else
        format.html { render :new }
        format.json { render json: @test_suite_word.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /test_suite_words/1
  # PATCH/PUT /test_suite_words/1.json
  def update
    respond_to do |format|
      if @test_suite_word.update(test_suite_word_params)
        format.html { redirect_to @test_suite_word, notice: 'Test suite word was successfully updated.' }
        format.json { render :show, status: :ok, location: @test_suite_word }
      else
        format.html { render :edit }
        format.json { render json: @test_suite_word.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /test_suite_words/1
  # DELETE /test_suite_words/1.json
  def destroy
    @test_suite_word.destroy
    respond_to do |format|
      format.html { redirect_to test_suite_words_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_suite_word
      @test_suite_word = TestSuiteWord.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_suite_word_params
      params.require(:test_suite_word).permit(:test_suite_id, :word_id)
    end
end
