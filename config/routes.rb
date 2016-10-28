Rails.application.routes.draw do
  resources :static_pages, only: [:show]
  root to: 'static_pages#show'
end
