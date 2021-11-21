namespace :load_data_xlsx do
  desc "Importing data from xslx to database"

  task product_table: :environment do
    file = Roo::Excelx.new(Rails.root.join('spreadsheets', 'produtos.xlsx'))
    
    puts "Importing products.\n"
    imported_products = 0

    spreadsheet = file.sheets[0]
    first_row = file.sheet(spreadsheet).first_row
    last_row = file.sheet(spreadsheet).last_row

    break if first_row.nil?
    data_starts_at = first_row + 1
    data_finishes_at = last_row
  

    (data_starts_at..data_finishes_at).each_with_index do |_data|
      row = file.sheet(spreadsheet).row(_data)

      if !(row[0].nil? && row[1].nil?)
        Product.new(title: row[0], price: row[1]).save
        imported_products += 1
      end

    end

    puts "\nFinished.\nImported data for products: #{imported_products}."

  end
  
end
