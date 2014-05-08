class TestSessionsController < ApplicationController
  before_action :set_test_session, only: [:show, :edit, :update, :destroy]

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

  # GET /test_sessions/1/edit
  def edit
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

  # PATCH/PUT /test_sessions/1
  # PATCH/PUT /test_sessions/1.json
  def update
    respond_to do |format|
      if @test_session.update(test_session_params)
        format.html { redirect_to @test_session, notice: 'Test session was successfully updated.' }
        format.json { render :show, status: :ok, location: @test_session }
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
      params.require(:test_session).permit(:user_id, :test_number, :start_time, :end_time, :ease_ranking, :fun_ranking, :accuracy_ranking, :test_suite_id, :test_unit_id)
    end
end
