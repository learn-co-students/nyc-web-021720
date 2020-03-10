class SquirrelsController < ApplicationController

  # READ ACTTIONS
  get '/squirrels' do # GET request to /squirrels
    @squirrels = Squirrel.all
    # talk to model Squirrel (which talks to the db for us)
    # render an erb file called squirrels
    erb :'squirrels/index'
  end

  # CREATE ACTIONS
  get '/squirrels/new' do
    # respond with a form to collect the squirrel's information
    # use that information to add that squirrel to our database 
    erb :'squirrels/new'
  end

  post '/squirrels' do
    squirrel = Squirrel.create(params[:squirrel])
    redirect "/squirrels/#{squirrel.id}"  
  # Go into our params and grab the information for the new squirrel
  # use that information to create a new squirrel in our database 
  end

  # UPDATE ACTIONS
  get '/squirrels/:id/edit' do
    # respond with a form that the user can use to edit the squirrel
    @squirrel = Squirrel.find(params[:id])
    erb :'squirrels/edit'
  end
  
  patch '/squirrels/:id' do
    binding.pry
    squirrel = Squirrel.find(params[:id])
    squirrel.update(params[:squirrel])
    redirect "/squirrels/#{squirrel.id}"
  end
  

  get '/squirrels/:id' do # GET to /squirrels/1
    @squirrel = Squirrel.find(params[:id])
    erb :'squirrels/show'
  end




end

# CRUD
