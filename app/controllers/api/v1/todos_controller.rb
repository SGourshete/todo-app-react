class Api::V1::TodosController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    fruit = Item.create(fruit_params)
    render json: fruit
  end

  def destroy
    Item.destroy(params[:id])
  end

  def update
    item = Item.find(params[:id])
    item.update_attributes(items_params)
    render json: item
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :description)
  end
end
