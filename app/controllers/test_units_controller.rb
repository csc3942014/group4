class TestUnitsController < ApplicationController
  before_action :set_test_unit, only: [:update, :destroy]

  # GET /test_units
  # GET /test_units.json
  def index
    @test_units = TestUnit.all      
  end

  # GET /test_units/new
  def new
    @test_unit = TestUnit.new
  end

  # POST /test_units
  # POST /test_units.json
  def create
    @test_unit = TestUnit.new(test_unit_params)

    respond_to do |format|
      if @test_unit.save
        format.html { redirect_to @test_unit, notice: 'Test unit was successfully created.' }
        format.json { render :show, status: :created, location: @test_unit }
      else
        format.html { render :new }
        format.json { render json: @test_unit.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /test_units/1
  # PATCH/PUT /test_units/1.json
  def update
    respond_to do |format|
      if @test_unit.update(test_unit_params)
        format.html { redirect_to @test_unit, notice: 'Test unit was successfully updated.' }
        format.json { render :show, status: :ok, location: @test_unit }
      else
        format.html { render :edit }
        format.json { render json: @test_unit.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /test_units/1
  # DELETE /test_units/1.json
  def destroy
    @test_unit.destroy
    respond_to do |format|
      format.html { redirect_to test_units_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_unit
      @test_unit = TestUnit.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_unit_params
      params.require(:test_unit).permit(:test_session_id, :word_id, :start_time, :end_time, :num_backspace)
    end
end
