# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movies = [
  {
    title: "Jaws",
    imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA",
    year: 1975,
    score: 19
  },
  {
    title: "The Matrix",
    imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0",
    year: 1999,
    score: 0
  },
  {
    title: "The Goonies",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg",
    year: 1985,
    score: 0
  },
  {
    title: "Free Willy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg",
    year: 1993,
    score: 0
  },
  {
    title: "Top Gun",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
    year: 1986,
    score: 0
  },
  {
    title: "Mean Girls",
    imageUrl: "https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465",
    year: 2004,
    score: 0
  }
]

puts "Destroying all ya moviez 📼"
Movie.destroy_all

puts "Creating ya moviez 📽"
movies.each do |movie|
  Movie.create(movie)
end



