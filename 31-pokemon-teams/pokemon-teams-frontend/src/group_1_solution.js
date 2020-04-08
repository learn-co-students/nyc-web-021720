// endpoint constants
const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// element constants
const main = document.querySelector('main')



function getTrainers() {
  return fetch(TRAINERS_URL)
  .then(res => res.json())
}

getTrainers()
.then(trainers => {
  trainers.forEach(renderTrainer)
})

function renderTrainer(trainer) {
  const trainerCard = document.createElement('div')
  trainerCard.className = 'card'
  trainerCard.dataset.id = trainer.id

  const nameTag = document.createElement('p')
  nameTag.textContent = trainer.name

  const addPokemon = document.createElement('button')
  addPokemon.textContent = "Add Pokemon"
  addPokemon.dataset.trainerId = trainer.id
  addPokemon.addEventListener('click', event => {
    if (event.target.nextSibling.children.length < 6) {
      addPokemonToDB(event)
    } else {
      console.warn("Too many pokes!")
    }
  })

  const pokemonList = renderPokemons(trainer)

  trainerCard.append(nameTag)
  trainerCard.append(addPokemon)
  trainerCard.append(pokemonList)
  main.append(trainerCard)
}

function renderPokemons(trainer) {
  const pokemonList = document.createElement('ul')
  trainer.pokemons.forEach(pokemon => {

    const pokemonItem = document.createElement('li')
    pokemonItem.textContent = `${pokemon.nickname} (${pokemon.species})`

    const releaseButton = document.createElement('button')
    releaseButton.className = 'release'
    releaseButton.dataset.pokemonId = pokemon.id
    releaseButton.textContent = "X"
    pokemonItem.append(releaseButton)
    pokemonList.append(pokemonItem)

    releaseButton.onclick = releasePokemon
  })

  return pokemonList
}

function releasePokemon(event) {
  const pokemonId = event.target.dataset.pokemonId
  fetch(POKEMONS_URL + `/${pokemonId}`, {
    method: "DELETE"
  })
  .then(() => event.target.parentNode.remove())
}

function addPokemonToDB(event) {
  const trainerId = event.target.dataset.trainerId

  fetch(POKEMONS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify({"trainer_id": trainerId})
  })
  .then(res => res.json())
  .then(renderPokemon)
  .catch(err => {
    console.warn("Too many pokemon")
  })
}

function renderPokemon(pokemon) {
  const trainerId = pokemon.trainer_id

  const trainerCard = main.querySelector(`div[data-id="${trainerId}"]`)
  console.log(trainerCard)

  const pokemonItem = document.createElement('li')
  pokemonItem.textContent = `${pokemon.nickname} (${pokemon.species})`

  const releaseButton = document.createElement('button')
  releaseButton.className = 'release'
  releaseButton.dataset.pokemonId = pokemon.id
  releaseButton.textContent = "X"
  pokemonItem.append(releaseButton)
  trainerCard.querySelector('ul').append(pokemonItem)

  releaseButton.onclick = releasePokemon

}