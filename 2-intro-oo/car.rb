require 'pry'
class Car
  attr_reader :serial_number
  # attr_writer :make
  attr_accessor :make, :model, :name
  @@all = []


  def initialize(make, model, serial_number)
    @make = make
    @model = model 
    @serial_number = serial_number
    @name = name
    Car.all << self
  end

  # def make 
  #   @make
  # end

  # def make=(new_make)
  #   @make = new_make
  # end



  def start
   puts "Hi my name is #{@name}"
  end

  def self.all
    @@all
  end


end

car = Car.new("Toyota", "Camry", 12345667)
binding.pry
puts "some line of code"