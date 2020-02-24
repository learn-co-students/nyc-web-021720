class Doctor
    attr_reader :name, :degree 
    attr_accessor :specialty
    @@all=[]
    def initialize(name, specialty, degree="M.D.")
        @name = name
        @specialty = specialty
        @degree = degree
        Doctor.all << self
    end

    def self.all 
        @@all 
    end


end

# sub specialty
# individual practice