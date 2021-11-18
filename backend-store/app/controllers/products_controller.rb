class ProductsController < ApplicationController
    def show
        @products = Product.all
        render json: @products
    end

    def create
        @products = Product.new(product_params)
    
        if @products.save
            render json: @products, status: :created
        else
            render json: @products.erros, status: :unprocessable_entity
        end
    end

    def destroy
    end

    def update
    end

    def product_params
        params.require(:produto).permit(:title, :price)
        # ActiveModelSerializers::Deserialization.jsonapi_parse(params, polymorphic: [:user], embedded: [:user_detail])
    end
end
