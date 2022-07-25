Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :v1, defaults: { format: :json } do
    resources :characters, only: %i[index show]
    resources :potions, only: %i[index show]
    resources :spells, only: %i[index show]
  end
end
