require 'pry'
require_relative './car'
require_relative './parking_lot'



plot1 = ParkingLot.new("Parking Lot A", "New York")
plot2 = ParkingLot.new("Parking Lot B", "Philadelphia")
plot3 = ParkingLot.new("Parking Lot C", "Los Angeles")
plot4 = ParkingLot.new("Parking Lot D", "New Jersey")
car1 = Car.new("Toyota", "Camry", 12345667, plot1)
car2 = Car.new("Nissan", "Altima", 12345667, plot2)
car3 = Car.new("Tesla", "Model 3", 12345667, plot3)
car4 = Car.new("Ford", "Explorer", 12345667, plot4)
car5 = Car.new("Honda", "Civic", 12345667, plot1)
car6 = Car.new("Subaru", "STI", 12345667, plot2)
car7 = Car.new("Lexus", "ES300h", 12345667, plot3)
binding.pry
puts "something "