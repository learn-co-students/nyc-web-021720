require 'pry'

class Animal
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def walk
    puts "Hey, I'm walking here!! 🚶‍♀️"
  end
end


class Dog < Animal
  attr_accessor :breed

  def initialize(name, age, breed)
    super(name, age)
    @breed = breed
  end

  def speak
    puts "Hi, my name is #{self.name}! Woof or whatever 🐩"
  end
end

bear = Dog.new("Bear", 'German Shepherd', 5)
gucci = Dog.new('Gucci', 'french bulldog', 1)

binding.pry
puts 'okthxbye' 