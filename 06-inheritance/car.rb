class Car
    attr_reader :serial_number, :make, :model
    @@all = []
    def initialize(make,model,serial_number)
        @make = make 
        @model = model 
        @serial_number = serial_number
        Car.all << self
    end
  
    def self.all 
        @@all
    end

    def start
        puts "#{self.make} #{self.model} is starting up"
    end

end