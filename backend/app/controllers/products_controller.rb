class ProductsController < ApplicationController
  def index
    products = Product.all

    render :json => products.to_json(:methods => [:product_image])
  end
end
