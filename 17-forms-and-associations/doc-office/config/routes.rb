Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :doctors, only: [:index, :new, :create, :edit, :update]
  resources :patients #, only: [:index, :show, :new, :create, :edit, :update]
  # resources :patients, except: [:destroy]
  resources :appointments, only: [:edit, :update, :destroy, :new, :create]
end
