console.log("THE DOM CHALLENGE")

// √get the counter thing
// √increment every second

// √click listeners on the + and - buttons to increment/decrement counter

// click listener on the <3 button that "likes" the current number - different output if the number has alread been liked
  // √if a number hasn't been liked before, render "Number has been liked!" to the ul
    // make a brand new li

// √if a number has already been liked, render "Numer has been liked x times!" to the ul
  // find the existing li and update its text

//√ we need a way of keeping track of likes


// click listener on pause button - √stop the counter, √disable buttons, √change button text to resume

// √click listener on resume button that does the reverse

// s√ubmit/click listener on the form that pulls comment out of text field and renders it on the DOM


let counter = document.getElementById('counter')
let likeCount = {} // {2: 4, 4: 1}
let likeList = document.getElementsByClassName('likes')[0]
let commentList = document.getElementById('list')


document.addEventListener('DOMContentLoaded', function(event){

  let timer = setInterval(function() {
    incrementCounter(1)
    // counter.textContent++
  }, 1000)

  document.addEventListener('click', event => {
    if(event.target.id === 'minus'){
      incrementCounter(-1)
    } else if(event.target.id === 'plus'){
      incrementCounter(1)
    } else if(event.target.id === 'heart'){
      let number = counter.textContent

      // number has been liked already
      if(likeCount[number]){
        likeCount[number]++
        let li = document.querySelector(`[data-number="${number}"]`)
        li.textContent = `${number} has been liked ${likeCount[number]} times! 🦸🏽‍♀️`
      } else {
        likeCount[number] = 1
        let li = document.createElement('li')
        li.dataset.number = number
        li.textContent = `${number} has been liked! 🦹🏻‍♂️`
        likeList.append(li)
      }
    } else if(event.target.id === 'pause'){
      clearInterval(timer)

      document.getElementById('minus').disabled = true
      document.getElementById('plus').disabled = true
      document.getElementById('heart').disabled = true
      document.getElementById('submit').disabled = true

      event.target.textContent = 'resume'
      event.target.id = 'resume'
    } else if(event.target.id === 'resume'){
      timer = setInterval(function() {
        incrementCounter(1)
      }, 1000)

      document.getElementById('minus').disabled = false
      document.getElementById('plus').disabled = false
      document.getElementById('heart').disabled = false
      document.getElementById('submit').disabled = false

      event.target.textContent = 'pause'
      event.target.id = 'pause'
    }
  })
  
  document.addEventListener('submit', function(event){
    event.preventDefault()
    let comment = event.target.comment.value
    let p = document.createElement('p')
    p.textContent = comment
    list.appendChild(p)
    event.target.reset()
  })
})



function incrementCounter(number){
  counter.innerText = parseInt(counter.textContent) + number
}