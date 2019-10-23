module Api::V1
class DreamsController < ApplicationController
  

  # GET /dreams
  def index
    @dreams = Dream.all.order('created_at DESC')
    render json: @dreams
  end

  # GET /dreams/1
  def show
    render json: @dream
  end

  # POST /dreams
  def create
    @dream = Dream.new(dream_params)
    if @dream.save
      render json: @dream
    end
  end

  # PATCH/PUT /dreams/1
  def update
    if @dream.update(dream_params)
      render json: @dream
    else
      render json: @dream.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dreams/1
  def destroy
    @dream.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dream
      @dream = Dream.find_by_id(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dream_params
      params.require(:dream).permit(:id, :title, :description)
    end
end
end
