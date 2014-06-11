class WordsController < ApplicationController
    before_action :set_word, only: [:destroy]

    respond_to :js

    # GET /words
    # GET /words.json
    def index
        @words = Word.all
    end

    # GET /words/new
    def new
        @word = Word.new
    end

    # POST /words
    # POST /words.json
    def create
        @word = Word.new(word_params)

        respond_to do |format|
            if @word.save
                format.html { redirect_to @word, notice: 'Word was successfully created.' }
                format.json { render :show, status: :created, location: @word }
            else
                format.html { render :new }
                format.json { render json: @word.errors, status: :unprocessable_entity }
            end
        end
    end


    def find_consucutive_letters(word)     

        consecutive_letters = 0

        for i in 0..word.length-1 do
            j = 1
            while word[i] == word[i+j] do
                consecutive_letters+=1
                if j >= word.length then
                    break
                end
				j+=1
			end
		end

		return consecutive_letters;
	end

    def add_word

        word_text = word_params[:word_text]
        word_length = word_text.length
        word_consec = find_consucutive_letters(word_text)

        @word = Word.new(word: word_text, length: word_length, consecutive_letters: word_consec)

        respond_to do |format|
            if @word.save
                format.html { redirect_to @word, notice: 'Word was successfully created.' }
                format.json { render :show, status: :created, location: @word }
            else
                format.html { render :new }
                format.json { render json: @word.errors, status: :unprocessable_entity }
            end
        end
    end

    def add_word_suite

        word_text = word_suite_params[:word]
        test_suite_id = word_suite_params[:test_suite_id]

        logger.debug "////BEGIN////"
        logger.debug word_suite_params
        logger.debug "////END////"

        if Word.exists?(:word => word_text) then
            @word = Word.find_by_word(word_text)
        else
            word_length = word_text.length
            word_consec = find_consucutive_letters(word_text)

            @word = Word.new(word: word_text, length: word_length, consecutive_letters: word_consec)
            @word.save
        end

            @test_suite_word = TestSuiteWord.new(test_suite_id: test_suite_id, word_id: @word.id)
            @test_suite_word.save

            render json: { test: @test_suite_word.id }
        end

        # DELETE /words/1
        # DELETE /words/1.json
        def destroy
            @word.destroy
            respond_to do |format|
                format.html { redirect_to words_url }
                format.json { head :no_content }
            end
        end

        private
        # Use callbacks to share common setup or constraints between actions.
        def set_word
            @word = Word.find(params[:id])
        end

        # Never trust parameters from the scary internet, only allow the white list through.
        def word_params
            params.require(:word).permit(:word, :length, :consecutive_letters)
        end

        def word_suite_params
            params.require(:word).permit(:word, :test_suite_id)
        end
    end
