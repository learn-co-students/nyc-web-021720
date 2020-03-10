require './config/environment'

class ApplicationController < Sinatra::Base
  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get '/' do
    erb :welcome
  end

  get '/meme' do
    erb :meme
  end

  get '/digimons' do
    # model
    @digimons = Digimon.all

    # response
    erb :'digimons/index'
  end


  get '/digimons/:id' do
    @digimon = Digimon.find(params[:id])

    # binding.pry
    erb :'digimons/show'
  end

end
