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

    def update
    end

    def destroyByid  # Vai deletar apartir do id
        Product.find(params[:id]).destroy!
        head :no_content
    end

    def findByid    # Vai buscar e retornar para o front o produto pelo id
        @product = Product.find(params[:id])
        render json: @product, status: :accepted
    end

    def updateByid
        @product = Product.find(params[:id])
        puts params.permitted?
        if @product.update(title: params[:title], price: params[:price])
            render json: @product, status: :created
        else
            render json: @product.erros, status: :unprocessable_entity
        end
    end

    private
    def product_params
        params.require(:product).permit!(:title, :price)
        # ActiveModelSerializers::Deserialization.jsonapi_parse(params, polymorphic: [:user], embedded: [:user_detail])
    end
end
