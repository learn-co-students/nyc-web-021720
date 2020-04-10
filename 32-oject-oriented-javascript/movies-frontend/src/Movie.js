class Movie {
  // static all = [] // <= this doesn't work with all browsers yet, possibly Safari...
  
  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.year = movieObj.year
    this.imageUrl = movieObj.imageUrl
    this.score = movieObj.score

    this.node = this.createLi()

    Movie.all.push(this)
  }

  render(ul){
    ul.append(this.node)
  }

  createLi(){
    let newMovie = document.createElement('li')
    newMovie.dataset.id = this.id

    newMovie.className = "movie"
    
    newMovie.innerHTML = `
      <h3>${this.title}</h3>
      <img alt="" src="${this.imageUrl}" />
      <h4>Year: </h4>
      <p>${this.year}</p>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete">&times;</button>
    `

    return newMovie
  }

  incrementScore(){
    let span = this.node.querySelector('span')
    let score = span.textContent
    score++
    
    this.score = score
    span.textContent = score
  }
  
  remove(){
    this.node.remove()
  }
  
  static find(id){
    return this.all.find(movie => movie.id === id)
  }
}

Movie.all = [] // use this instead of a static varaible for now
