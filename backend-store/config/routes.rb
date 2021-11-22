Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resource :products
  get 'products/:id', to: 'products#findByid'
  delete 'products/:id', to: 'products#destroyByid'
  put 'products/:id', to: 'products#updateByid'

end
