class Pikachu < Pokemon
    attr_reader :number_of_stripes
    @@all = []
    def initialize(attr_hash)
        super("Pikachu", attr_hash[:type])
        @number_of_stripes = attr_hash[:number_of_stripes]
        Pikachu.all << self
    end

    def eat
        puts "just ate a lot of food"
        use_the_bathroom
    end

    def self.all 
        @@all
    end

    def bio 
        puts "Hi I'm Pikachu, here is info about me, my name is #{self.name}, I have #{self.number_of_stripes} number of stripes"
    end

        private

    def use_the_bathroom
        puts "I need to use the bathroom"
    end

end