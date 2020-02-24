class Toyota < Car
    attr_accessor :nickname
    @@all=[]
    def initialize(make, model, serial_number,nickname)
        super(make, model, serial_number)
        @nickname = nickname
        Toyota.all << self
    end

    def self.all
        @@all
    end
end