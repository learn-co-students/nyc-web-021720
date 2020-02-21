class Catch
    attr_reader :pokemon, :trainer
    @@all = []
    def initialize(pokemon, trainer)
        @pokemon = pokemon
        @trainer = trainer
        Catch.all << self
    end

    # def trainer 
    #     @trainer
    # end

    def self.all 
        @@all
    end

end