const movies = [
  {
    title: 'The Goonies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
    year: 1985,
    score: 0
  },
  { 
    title: 'Free Willy',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
    year: 1993,
    score: 0  
  },
  { 
    title: 'Top Gun',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    year: 1986,
    score: 0  
  },
  { 
    title: 'Mean Girls',
    imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
    year: 2004,
    score: 0  
  },
  { 
    title: 'Parasite',
    imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
    year: 2019,
    score: 0  
  }
]

console.log("index js")

// add Back to the Future to our DOM

// √create an li for the new movie
// √add class to li
// √add HTML to the li
// √get the ul
// √attach this li to the ul on the page

let backToTheFuture = {
  title: 'Back to the Future',
  year: 1985,
  score: 99,
  imageUrl: "https://cdn.shopify.com/s/files/1/1148/8924/products/MPW-93254-a_1024x1024.jpg?v=1571439877"
}

let ul = document.querySelector('ul')
let li = createMovieEl(backToTheFuture)

ul.appendChild(li)

function createMovieEl(movieObj){
  let newMovie = document.createElement('li')

  newMovie.className = "movie"
  
  newMovie.innerHTML = `
    <h3>${movieObj.title}</h3>
    <img alt="" src="${movieObj.imageUrl}" />
    <h4>Year: </h4>
    <p>${movieObj.year}</p>
    <h4>Score: <span>${movieObj.score}</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button>Down Vote</button>
    <button data-purpose="delete">&times;</button>
  `

  return newMovie
}

