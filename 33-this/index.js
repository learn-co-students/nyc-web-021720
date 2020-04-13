console.log("this is so much fun!")

/************ Simple Function Call ***********************/

function sayThis(){
  console.log("This is: ", this)
}

// this is a simple function call will be the window

/************ Bind/Call/Apply ****************************/
this.name = "Winslow"

function sayName(location, time){
  console.log(`Hi, my name is ${this.name}, I am in ${location} and it is ${time}`)
}

let steven = {
  name: "Steven"
}

// sayName.call(steven, "NYC", "10:18am")
// sayName.apply(steven, ["NYC", "10:20am"]) // => immediately invoke the function with the ThisArg

let saySteven = sayName.bind(steven, "NYC", "10:24am")  // => wraps the original function in another function, does not immediately invoke
// saySteven()
/************ Function called on an Object ***************/

let neikko = {
  name: "Neikko",
  speak: function(){
    console.log(`Woof! My name is ${this.name}`)
  }
}

// neikko.speak() // Woof! My name is Neikko

let talk = neikko.speak
// talk() // Woof! My name is Winslow


/************ Function Called with New Keyword ***********/

class Person {
  constructor(name, favColor){
    this.name = name,
    this.favColor = favColor
  }
}

function Dog(name, favToy) {
  this.name = name
  this.favToy = favToy
}

let michael = new Person("Michael", "blue")
let perky = new Dog("Perky", "horse manure")

/************ Arrow Functions ****************************/


let arrowThis = () => console.log(this.name)

let arrowObject = {
  name: 'Avro',
  sayName: () => {
    console.log(this.name)
  }
}