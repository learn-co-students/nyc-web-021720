Rails.application.routes.draw do
  resources :patients, only: [:index, :show, :new, :create, :edit, :update]
  # resources :patients, except: [:destroy]

  get '/doctors', to: 'doctors#index'
  # delete '/appointments/:id', to: 'appointments#destroy'
  resources :appointments, only: [:destroy]
end
