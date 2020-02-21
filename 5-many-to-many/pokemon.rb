class Pokemon
    attr_reader :type, :name
    attr_accessor :nickname
    @@all = []
    def initialize(name, type, nickname=nil)
        @name = name
        @type = type
        @nickname = nickname
        Pokemon.all << self
    end

    def self.all
        @@all
    end 
end