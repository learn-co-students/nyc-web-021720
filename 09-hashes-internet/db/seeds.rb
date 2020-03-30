require 'pry'
require 'rest-client'
require 'json'

Trainer.destroy_all
Pokemon.destroy_all

# Making the request to the Pokemon API
resp = RestClient.get("https://pokeapi.co/api/v2/pokemon/")
# The API responds with data but Ruby is not able to read that data 
# So we use the JSON library to parse that data and return it in a datatype(s) that Ruby can work with
data = JSON.parse(resp)
# After reading the data I'm parseing through the data to pull out the specific information I need for my app 
pokemon_list = data["results"]

t1 = Trainer.create(name: "Jeff", age: 21, master: false)
t2 = Trainer.create(name: "Daniel", age: 21, master: true)

pokemon_list.each do |pokemon|
    Pokemon.create(name: pokemon["name"], trainer: Trainer.all.sample)
end

binding.pry

"string"