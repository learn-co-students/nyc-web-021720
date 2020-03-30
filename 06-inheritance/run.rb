require 'pry'
require_relative './car'
require_relative './toyota'
require_relative './doctor'
require_relative './ophthamologist'
require_relative './Pokemon'
require_relative './Pikachu'



hash = {
    type: "electric",
    number_of_stripes: 3,
}
# Ophthamologist.new(hash)
p1 = Pikachu.new(hash)

binding.pry 
puts "some stuff"