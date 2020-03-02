require 'pry'
require_relative './config/environment'
require 'rest-client'
require 'json'


def login_user(name)
    user = Trainer.find_or_create_by(name: name)
end



def run_application
    puts "What is your name?" 
    user_input = gets.chomp
    user = login_user(user_input)
    puts "Which Pokemon is yours?"
    user_pokemon = gets.chomp
    resp = RestClient.get("https://pokeapi.co/api/v2/pokemon/#{user_pokemon}/")
    pokemon_data = JSON.parse(resp)["abilities"]
    ability =  pokemon_data[0]["ability"]["name"]
    puts "#{user_pokemon}'s ability is #{ability}"
end

run_application

