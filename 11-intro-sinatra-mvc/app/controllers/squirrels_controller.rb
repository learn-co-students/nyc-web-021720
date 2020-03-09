class SquirrelsController < ApplicationController
  get '/squirrels' do # GET request to /squirrels
    @squirrels = Squirrel.all
    # talk to model Squirrel (which talks to the db for us)
    # render an erb file called squirrels
    erb :'squirrels/index'
  end

  get '/squirrels/:id' do # GET to /squirrels/1
    @squirrel = Squirrel.find(params[:id])
    erb :'squirrels/show'
  end
end
