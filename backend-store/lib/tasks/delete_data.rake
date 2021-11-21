namespace :delete_data do
  desc "TODO"

  task all_product_table: :environment do
    Product.destroy_all
  end

end
