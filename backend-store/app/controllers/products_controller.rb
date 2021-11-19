class ProductsController < ApplicationController
    def show
        @products = Product.all
        render json: @products
    end

    def create
        @product = Product.new(product_params)
    
        if @product.save
            render json: @product, status: :created
        else
            render json: @product.erros, status: :unprocessable_entity
        end
    end

    def destroy
    end

    def deleteByid  # Vai deletar apartir do id
        Product.find(params[:id]).destroy!
        head :no_content
    end

    def findByid    # Vai buscar e retornar para o front o produto pelo id
        @product = Product.find(params[:id])
        render json: @product, status: :accepted
    end

    def update
        # if @product.update(product_params)
        #     render json: @product, status: :created
        # else
        #     render json: @product.erros, status: :unprocessable_entity
        # end
    end

    def updateByid
        puts @product
        # if @product.update(product_params)
        #     render json: @product, status: :created
        # else
        #     render json: @product.erros, status: :unprocessable_entity
        # end
    end

    private
    def product_params
        params.require(:produto).permit(:title, :price)
        # ActiveModelSerializers::Deserialization.jsonapi_parse(params, polymorphic: [:user], embedded: [:user_detail])
    end
end
