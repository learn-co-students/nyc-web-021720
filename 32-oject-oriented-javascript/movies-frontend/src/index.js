const baseUrl = "http://localhost:3000/api/v1/movies"
const movieList = document.querySelector('ul')
const stupidHeaders = {
  "content-type": "application/json",
  "accept": "application/json"
}
const movieAdapter = new Adapter(baseUrl)

document.addEventListener("DOMContentLoaded", function(event){
  
  getMovies()

  let formButton = document.createElement('button')
  formButton.textContent = "Add Movie"
  let welcomeImage = document.getElementById('welcome-image')
  welcomeImage.insertAdjacentElement('afterend', formButton)

  formButton.addEventListener('click', function(event){
    let newForm = document.createElement('form')
    newForm.innerHTML = `
      <label>Title: </label>
      <input type="text" name="title"><br/>
      <label>Image URL: </label>
      <input type="text" name="imageUrl"><br/>
      <label>Year: </label>
      <input type="number" name="year"><br/>
      <label>Submit: </label>
      <input type="submit" value="submit">
    `

    document.body.replaceChild(newForm, formButton)

    newForm.addEventListener('submit', function(event){
      event.preventDefault()

      let form = event.target

      let title = form.title.value
      let year = form.year.value
      let imageUrl = form.imageUrl.value
      let score = 0

      let newMovie = { title, year, imageUrl, score }

      newForm.reset()

      document.body.replaceChild(formButton, newForm)

      movieAdapter.createResource(newMovie)
      .then(renderMovie)
    })
  })

  movieList.addEventListener('click', event => {
    if(event.target.className === 'up-vote'){
      let id = parseInt(event.target.parentNode.dataset.id)
      let movie = Movie.find(id)

      movie.incrementScore()

      movieAdapter.updateResource(movie, { score: movie.score })
      .then(console.log)

    } if(event.target.dataset.purpose === 'delete'){
      let id = parseInt(event.target.parentNode.dataset.id)

      movieAdapter.deleteResource(id)
      .then(movieObj => {
        let movie = Movie.find(movieObj.id)
        movie.remove()
      })
    }
  })
})

function getMovies(){
  movieAdapter.getResources() // <= returns a promise
  .then(renderMovies)
}

function renderMovies(moviesData) {
  moviesData.forEach(renderMovie)
}

function renderMovie(movieObj){
  let movie = new Movie(movieObj)
  movie.render(document.querySelector("ul"))
}