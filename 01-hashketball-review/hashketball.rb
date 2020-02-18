require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        { name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        { name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        { name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
         { name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        { name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        { name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        { name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
         { name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        { name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        { name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

all_names = [{name: "Tashawn", age: 29}, {name: "Brianna"}, {name:"Chett"}, {name:"Gabbie"}]
other_names = ["name", "name2"]

def find_person(name, names)
  names.find do |person_hash|
    person_hash[:name] == name
    end
end


puts find_person("Chett", all_names)



# return the first object who's name is "Chett"



# each
  # - returns the original data

# map/collect
  # - with map we can add additional logic
  # - returns a new array of elements that satisfy a condition

# select
  # - returns a new array of elements that satify a condition and we generally cannot add additional logic to that condition

# find
  # - return the first element that satifies a condition

def players 
  game_hash.map do |location, value|
    value[:players]
  end.flatten
end


def num_points_scored(name)
   # run game hash
   # access the hash's home/away depending on if the player is in home/away
  players.find do |player|
   player[:name] == name
    end[:points]
   # find the player/hash/object that has that player's name
   # print the value of the "points" key from the hash
end











# def num_points_scored(player_name)
#   # get a list of all the players
#   # find the player whose name matches the argument 'player_name'
#   # return that player's points
# end




# # EXERCISE:
# # Define a method called get_names that takes an array of instructors
# # and returns just their names.
# instructors = [
#   {name: 'Alex', hometown: 'upstate ny', mood: 'excited'},
#   {name: 'rachel', hometown: 'maine'},
#   {name: 'maxwell', hometwon: 'brookyln'}
# ]
#
# def get_names(instructors)
#
# end




# def get_players
#
# end



# # EXERCISE
# # What do the following return?
#
# arr = (1..100).to_a
#
# arr.map do |num|
#   num.even?
# end
#
# arr.select do |num|
#   7
# end
