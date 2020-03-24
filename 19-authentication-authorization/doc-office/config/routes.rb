Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :doctors, only: [:index, :new, :create, :edit, :update]
  resources :patients #, only: [:index, :show, :new, :create, :edit, :update]
  # resources :patients, except: [:destroy]
  resources :appointments, only: [:edit, :update, :destroy, :new, :create]

  get 'sessions/new', to: 'sessions#new', as: "new_login"
  post 'sessions', to: 'sessions#create', as: "login"
  delete 'sessions', to: 'sessions#destroy', as: "destroy_session"
end
