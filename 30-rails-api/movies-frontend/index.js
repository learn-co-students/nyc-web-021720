console.log("index js")

const baseUrl = "http://localhost:3000/api/v1/movies"
let movieList = document.querySelector('ul')
let stupidHeaders = {
  "content-type": "application/json",
  "accept": "application/json"
}

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

      let movieEl = createMovieEl(newMovie)

      movieList.append(movieEl)

      newForm.reset()

      document.body.replaceChild(formButton, newForm)

      fetch(baseUrl, {
        method: "POST",
        headers: stupidHeaders,
        body: JSON.stringify(newMovie)
      })
    })
  })

  movieList.addEventListener('click', event => {
    if(event.target.className === 'up-vote'){
      console.log('voting up')
      let button = event.target
      let span = button.parentNode.querySelector('span')
      let score = span.textContent
      score++
      
      span.textContent = score
    } if(event.target.dataset.purpose === 'delete'){
      let button = event.target
      button.parentNode.remove()
    }
  })

})


function getMovies(){
  fetch(baseUrl)
  .then(response => response.json())
  .then(movies => {
    movies.forEach(function(movie){
      let movieLi = createMovieEl(movie)
      movieList.appendChild(movieLi)
    })
  })
}

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