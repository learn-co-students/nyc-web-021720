class Pokemon
    attr_reader :name, :type
    attr_accessor :nickname
    @@all=[]
    def initialize(name, type, nickname=nil)
        @name = name
        @type = type
        @nickname = nickname
    end
    
    def self.all 
        @@all
    end

    private

    def use_the_bathroom
        puts "I need to use the bathroom"
    end
end