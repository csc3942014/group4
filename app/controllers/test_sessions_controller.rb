class TestSessionsController < ApplicationController
  before_action :set_test_session, only: [:show, :update, :destroy]
  skip_before_filter :verify_authenticity_token  

  # GET /test_sessions
  # GET /test_sessions.json
  def index
    @test_sessions = TestSession.all
  end

  # GET /test_sessions/1
  # GET /test_sessions/1.json
  def show
  end

  # GET /test_sessions/new
  def new
    @test_session = TestSession.new
  end

  # POST /test_sessions
  # POST /test_sessions.json
  def create
    @test_session = TestSession.new(test_session_params)

    respond_to do |format|
      if @test_session.save
        format.html { redirect_to @test_session, notice: 'Test session was successfully created.' }
        format.json { render :show, status: :created, location: @test_session }
      else
        format.html { render :new }
        format.json { render json: @test_session.errors, status: :unprocessable_entity }
      end
    end
  end
    
  # POST /test_sessions_setup
  # POST /test_sessions_setup.json
  def setup
      
      keyboard_id = setup_params[:keyboard_id]
      test_suite_id = setup_params[:test_suite_id]
      user_id = 2 #current_user
      
      @test_session = TestSession.new( keyboard_id: keyboard_id, 
                                       test_suite_id: test_suite_id,
                                       user_id: user_id,
          							   start_time: DateTime.now
                                     )
      @test_session.save
      
      redirect_to testing_path(test_session_id: @test_session.id, keyboard_id: @test_session.keyboard_id)
  end
    
  # PATCH/PUT /test_sessions/1
  # PATCH/PUT /test_sessions/1.json
  def update
    respond_to do |format|
      if @test_session.update(test_session_params)
        format.html { redirect_to @test_session, notice: 'Test session was successfully updated.' }
        format.json { render json: @test_session }
      else
        format.html { render :edit }
        format.json { render json: @test_session.errors, status: :unprocessable_entity }
      end
    end
  end

    
  # DELETE /test_sessions/1
  # DELETE /test_sessions/1.json
  def destroy
    @test_session.destroy
    respond_to do |format|
      format.html { redirect_to test_sessions_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_session
      @test_session = TestSession.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_session_params
      params.require(:test_session).permit(:user_id, :start_time, :end_time, :ease_ranking, :fun_ranking, :accuracy_ranking, :test_suite_id, :keyboard_id)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def setup_params
        params.require(:test_session).permit(:keyboard_id, :test_suite_id)
    end
end
