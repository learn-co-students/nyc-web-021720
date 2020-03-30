class Ophthamologist < Doctor
    attr_accessor :sub_specialty, :practice
    @@all=[]
    def initialize(hash)
        super(hash[:name], "Ophthamologist", hash[:degree])
        @sub_specialty = hash[:sub_specialty]
        @practice = hash[:practice]
        Ophthamologist.all << self
    end

    def self.all 
        @@all
    end

    private


    def make_appointment
        puts "appointment made"
    end
end


