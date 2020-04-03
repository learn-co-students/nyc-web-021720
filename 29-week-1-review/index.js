// grab the random button
// add click listener 
// fetch get to the api
// get the image out of url
// slap it to the dom

let random = document.getElementById('random')
let likeButton = document.createElement('button')
likeButton.textContent = 'Like <3'
likeButton.id = 'like-button'
let div = document.querySelector('.image-container')
div.appendChild(likeButton)

document.addEventListener('click', e => {
  if(e.target.id === 'random'){
    fetch("https://api.giphy.com/v1/gifs/random?api_key=1dg7TukE9mOaYxxBMF6Q8C69GZSJTnDO&tag=&rating=G")
    .then(response => response.json())
    .then(body => {
      console.log(body.data.title)
      let title = body.data.title
      let rating = body.data.rating
      let gif = body.data.images.original.url

      let imageTag = document.getElementById('image')
      imageTag.dataset.title = title
      imageTag.dataset.rating = rating
      imageTag.dataset.url = gif
      imageTag.src = gif
    })
    .catch(creepyDoll)
    

  } else if(e.target.id === 'like-button'){
    console.dir(e.target.previousElementSibling)
    let image = e.target.previousElementSibling
    let body = {
      title: image.dataset.title,
      url: image.dataset.url,
      rating: image.dataset.rating
    }

    fetch("http://localhost:3000/pics", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(console.log)
    .catch(creepyDoll)
  }

})


function creepyDoll(){
  let image = document.createElement('img')
  image.src = "assets/creepy_doll.jpg"
  image.style.height = '100%'
  image.style.width = '100%'

  document.body.style.backgroundColor = 'black'
  document.body.prepend(image)

  var scream = new Audio('assets/scream.mp3')
  scream.play();

  setTimeout(function(){
      image.remove()
      document.body.style.backgroundColor = ''
  }, 3000)
}