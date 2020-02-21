require 'pry'
class Car
  attr_reader :serial_number
  # attr_writer :make
  attr_accessor :make, :model, :name, :parking_lot
  @@all = []


  def initialize(make, model, serial_number, parking_lot)
    @make = make
    @model = model 
    @serial_number = serial_number
    @name = nil
    @parking_lot = parking_lot
    # @parking_lot.add_car(self)
    Car.all << self
  end

  # def make 
  #   @make
  # end

  # def make=(new_make)
  #   @make = new_make
  # end

  # def name 

  # end


  def start
   puts "Hi my name is #{@name}"
  end

  def self.all
    @@all
  end

end

