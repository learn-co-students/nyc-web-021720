// √fetch all the trainers
// √render trainers to DOM
// √render each trainer's pokemons

// √click listener on add pokemon buttons
// √fetch to get a new pokemon
// √append pokemon to trainer team

// √click listener on release buttons
// √fetch to delete pokemon
// √remove from DOM

const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

document.addEventListener("DOMContentLoaded", event => {
  fetchTrainers()
  clickHandler()
})

function clickHandler() {
  main.addEventListener('click', event => {
    if(event.target.textContent === 'Add Pokemon'){
      console.dir(event.target)
      event.target.trainerId = 555
      console.dir(event.target)
      fetch(POKEMONS_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify({trainer_id: event.target.dataset.trainerId})
      })
      .then(response => response.json())
      .then(pokemon => {
        console.log(pokemon)
        if(pokemon.error){
          alert(pokemon.error)
        } else {
          let li = renderPokemon(pokemon)
          let ul = event.target.parentNode.querySelector('ul')
          ul.append(li)
        }
      })
    } else if (event.target.className === 'release'){
      fetch(POKEMONS_URL + "/" + event.target.dataset.pokemonId, {method: "DELETE"})
      .then(response => response.json())
      .then(pokemon => {
        event.target.parentNode.remove()
      })
    }
  })
}

function fetchTrainers(){
  fetch(TRAINERS_URL)
  .then(response => response.json())
  .then(trainers => {
    // √loop the trainers
    // √get trainer data
    // √build card for each trainer
    // √loop through the trainers pokemons
    // √get data
    // √create li for each pokemons

    console.log(trainers)
    trainers.forEach(trainer => {
      let div = renderTrainer(trainer)
      main.append(div)
    })
  })
}

function renderTrainer(trainer){
  let card = document.createElement('div')
  card.setAttribute("class", "card")
  // card.className = "card"
  card.dataset.id = trainer.id

  card.innerHTML = `
    <p>${trainer.name}</p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
  `

  let ul = document.createElement('ul')
  card.append(ul)

  // loop through pokemons
  // create an li for each one
  // append the li to the ul

  trainer.pokemons.forEach(pokemon => {
    let li = renderPokemon(pokemon)
    ul.append(li)
  })
  
  return card
}

function renderPokemon(pokemon) {
  let li = document.createElement('li')

  li.innerHTML = `
    ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
  `

  return li
}
