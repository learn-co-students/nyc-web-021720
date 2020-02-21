class ParkingLot 
  attr_reader :name, :city
  @@all = []

  def initialize(name, city)
    @name = name 
    @city = city 
    ParkingLot.all << self
  end

  def cars
    Car.all.select do |car_object|
        car_object.parking_lot == self 
    end
  end

    def all_toyotas
        cars.select do |car|
            car.make == "Toyota"
        end
    end

  def self.all 
    @@all
  end
end