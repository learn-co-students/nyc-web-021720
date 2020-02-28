require 'pry'

require_relative './catch'
require_relative './pokemon'
require_relative './trainer'

p1 = Pokemon.new("Pikachu", "Electric")
p2 = Pokemon.new("Squirtle", "Water")
p3 = Pokemon.new("Bulbasaur", "Grass")

t1 = Trainer.new("Ramzy")
t2 = Trainer.new("Jack")
t3 = Trainer.new("Dan")
t4 = Trainer.new("Yahya")
t5 = Trainer.new("Andrew")

Catch.new(p1, t1)
Catch.new(p2, t2)
Catch.new(p3, t3)

binding.pry
puts "some stuff"