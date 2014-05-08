class UserAttributesController < ApplicationController
  before_action :set_user_attribute, only: [:show, :edit, :update, :destroy]

  # GET /user_attributes
  # GET /user_attributes.json
  def index
    @user_attributes = UserAttribute.all
  end

  # GET /user_attributes/1
  # GET /user_attributes/1.json
  def show
  end

  # GET /user_attributes/new
  def new
    @user_attribute = UserAttribute.new
  end

  # GET /user_attributes/1/edit
  def edit
  end

  # POST /user_attributes
  # POST /user_attributes.json
  def create
    @user_attribute = UserAttribute.new(user_attribute_params)

    respond_to do |format|
      if @user_attribute.save
        format.html { redirect_to @user_attribute, notice: 'User attribute was successfully created.' }
        format.json { render :show, status: :created, location: @user_attribute }
      else
        format.html { render :new }
        format.json { render json: @user_attribute.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_attributes/1
  # PATCH/PUT /user_attributes/1.json
  def update
    respond_to do |format|
      if @user_attribute.update(user_attribute_params)
        format.html { redirect_to @user_attribute, notice: 'User attribute was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_attribute }
      else
        format.html { render :edit }
        format.json { render json: @user_attribute.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_attributes/1
  # DELETE /user_attributes/1.json
  def destroy
    @user_attribute.destroy
    respond_to do |format|
      format.html { redirect_to user_attributes_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_attribute
      @user_attribute = UserAttribute.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_attribute_params
      params.require(:user_attribute).permit(:name, :user_id)
    end
end
