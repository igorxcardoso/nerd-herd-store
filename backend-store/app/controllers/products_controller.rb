class ProductsController < ApplicationController
    def Index
        @products = Product.all
        render json: @products
    end
end
