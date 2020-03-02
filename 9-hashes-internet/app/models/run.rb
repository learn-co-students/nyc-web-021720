require 'pry'
# require_relative '../../config/environment'
require 'rest-client'
require 'json'
# require_relative './pokemon/trainer'
# require_relative './pokemon/pokemon'

def run_application
    puts "What is your name?" 
    user_name = gets.chomp
    trainer = Trainer.create(name: user_name)
    puts "Which Pokemon is yours?"
    user_pokemon = gets.chomp
    resp = RestClient.get("https://pokeapi.co/api/v2/pokemon/#{user_pokemon}/")
    pokemon_data = JSON.parse(resp)["abilities"]
    ability =  pokemon_data[0]["ability"]["name"]
    Pokemon.create(name: user_pokemon, ability: ability, trainer: trainer)
    puts "#{user_pokemon}'s ability is #{ability}"
end

run_application

