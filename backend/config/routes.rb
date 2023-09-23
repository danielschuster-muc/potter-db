Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # root route
  root to: redirect("https://docs.potterdb.com")

  get '/openapi', to: 'documentation#openapi'

  # api routes
  namespace :v1, defaults: { format: :json } do
    resources :books, only: %i[index show] do
      resources :chapters, only: %i[index show]
    end
    resources :characters, only: %i[index show]
    resources :movies, only: %i[index show]
    resources :potions, only: %i[index show]
    resources :spells, only: %i[index show]
  end

  # graphql routes
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql" if Rails.env.development?
  post "/graphql", to: "graphql#execute"
end
