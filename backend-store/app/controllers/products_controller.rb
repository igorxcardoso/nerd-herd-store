class ProductsController < ApplicationController
    def show
        @products = Product.all
        puts @products
        
        render json: @products
    end
end
