class OrdersController < ApplicationController
  before_action :authenticate_user!

  def create
    # 1. create the order with the params. Order.create(....)
    # 2. delete the cart for the useR OR have an status boolen completed /true /false
    # binding.pry
    order = Order.new(user_id: order_params[:user_id], total: order_params[:total])

    order_params[:order_items].each do |item|
      order.order_items << OrderItem.create(item)
    end

    order.save

    render json: order
  end

  def index
    orders = Order.find_by(user_id: current_user.id)
    render json: orders
  end

  private
  def order_params
    params.require(:order).permit(:user_id, :total, :order_items=> [:product_id, :price, :quantity])
  end

end
