class KeyboardsController < ApplicationController
  before_action :set_keyboard, only: [:show, :destroy]

  # GET /keyboards
  # GET /keyboards.json
  def index
    @keyboards = Keyboard.all
  end
    
  # GET /keyboards/1
  # GET /keyboards/1.json
  def show
  end

  # GET /keyboards/new
  def new
    @keyboard = Keyboard.new
  end

  # POST /keyboards
  # POST /keyboards.json
  def create
    @keyboard = Keyboard.new(keyboard_params)

    respond_to do |format|
      if @keyboard.save
        format.html { redirect_to @keyboard, notice: 'Keyboard was successfully created.' }
        format.json { render :show, status: :created, location: @keyboard }
      else
        format.html { render :new }
        format.json { render json: @keyboard.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /keyboards/1
  # DELETE /keyboards/1.json
  def destroy
    @keyboard.destroy
    respond_to do |format|
      format.html { redirect_to keyboards_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_keyboard
      @keyboard = Keyboard.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def keyboard_params
      params.require(:keyboard).permit(:name, :description)
    end
end
