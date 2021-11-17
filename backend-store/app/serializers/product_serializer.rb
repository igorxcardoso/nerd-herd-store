class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :updated_at
end
