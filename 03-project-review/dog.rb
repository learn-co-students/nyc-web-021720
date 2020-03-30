require 'pry'

class Dog
    attr_reader :breed
    # attr_writer :name
    attr_accessor :name 
    @@all = []
    
    def initialize(name, breed)
        @name = name 
        @breed = breed
        Dog.all << self 
    end

    def sit 
        puts "#{@name} is sitting"
    end
    def roll_over 
        puts "#{@name} is rolling over"
    end
    def speak 
        puts "roof roof"
    end

    def self.all 
        @@all
    end

    def self.find_breed(breed)
        @@all.select do |dog_object|
            dog_object.breed == breed 
        end
    end

    def self.names
        @@all.map do |dog_object|
            dog_object.name
        end
    end
    
end



dog = Dog.new("fido", "pit bull")
dog = Dog.new("small dog", "yorkie")
dog = Dog.new("medium dog", "lab")
binding.pry 
puts "this is working...maybe?"