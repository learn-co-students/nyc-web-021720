console.log("listening")

// when a user clicks on the welcome image it should display a baby sloth

// √get the image
// √add a click listener
// √when clicked, change the picture

let image = document.getElementById('welcome-image')

image.addEventListener("click", function(event){
  console.log('clicking')
  let welcomeImage = event.target
  welcomeImage.src = "https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg"
})

// add a listener to the same image that adds a 
// thick turquoise border to the image when the mouse
// hovers over it, and removes the border when the mouse is 
// no longer hovering over it

image.addEventListener('mouseover', function(event){
  let image = event.target
  console.dir(event.target)
  image.style.border = "20px solid red"
})

image.addEventListener('mouseleave', function(event){
  let image = event.target
  console.dir(event.target)
  image.style.border = ""
})