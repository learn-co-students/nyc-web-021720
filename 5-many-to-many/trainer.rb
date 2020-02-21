class Trainer
    attr_accessor :name
    @@all = []
    def initialize(name)
        @name = name
        Trainer.all << self
    end

    def self.all
        @@all
    end

    def catches
          Catch.all.select do |catch|
            catch.trainer == self
        end
    end

    def pokemon 
      catches.map do |catch|
        catch.pokemon
      end
    end

    def find_pokemon(name)
        pokemon.find do |pokemon|
            pokemon.name == name
        end
    end
    
    def nickname_pokemon(name, nickname)
        find_pokemon(name).nickname = nickname
    end

    def catch_pokemon(name, type)
        p = Pokemon.new(name, type)
        Catch.new(p, self)
    end
end