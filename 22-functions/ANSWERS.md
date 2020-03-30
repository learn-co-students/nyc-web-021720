# Variables, Functions, and Scope in JS

### Writing functions in JavaScript

1. Write a function named `hiWorld` that prints 'hello world' to the console

```javascript
// function declaration
function hiWorld(){
  console.log("Hello world")
}
```

2. Write the same function from above in 2 other ways using different syntax

```javascript
// function expression
let hiWorld = function(){
  console.log("Hello world")
}

// arrow syntax
let hiWorld = () => {
  return "Hello world"
}
```

3. Write a function that accepts a 'name' parameter and prints "Hi, my name is `<name>`" to the console

```javascript
function sayName(name){
  console.lgo(`Hi, my name is ${name}`)
}
```

4. Write a funtion that accepts 2 numbers as parameters and returns their sum

```javascript
function sum(x, y){
  return x + y
}
```

5. Write a function that accepts a number as a parameter returns the double of it

```javascript
function double(x){
  return x * 2
}
```

6. Write a function called `logger` that accepts a string as a parameter and then passes that string to `console.log`. Use `logger` as a callback to console.log each element in the array below. 

```javascript
let stringArray = ["JavaScript", "is pretty", "cool", "I guess."]

function logger(string){
  console.log(string)
}


stringArray.forEach(logger)
```

7. Write a function that accepts a number as a parameter and prints "❌ You're too young to enter the clurb! ❌" if the parameter 
is less than 21 and "🤡 Welcome to the clurb! 🚀" if the parameter is 21 or over

```javascript
function canIEnter(age){
  if(age < 21){
    console.log( "❌ You're too young to enter the clurb! ❌")
  } else {
    console.log("🤡 Welcome to the clurb! 🚀")
  }
}
```

8. Modify the above function to allow an underage patron in if they have a fake id

```javascript
function canIEnter(age, fakeId = false){
  if(age < 21 && !fakeId){
    console.log( "❌ You're too young to enter the clurb! ❌")
  } else {
    console.log("🤡 Welcome to the clurb! 🚀")
  }
}
```

### Scope in JavaScript

9. What is lexical scope?

```

```

10. What would be printed to the console in the example below? Why?

```javascript
let carType = "Honda Civic"

function myCar(carType){
  console.log(`I drive a fancy ass ${carType}!`)
}

myCar('Tesla X')

// I drive a fancy ass Tesla X
// Because lexical scope means call to console.log will
// see the carType parameter passed into the function before
// the carType variable declared in the global scope
```

```javascript
// global scope -> variable defined in the global context
// function scope -> variables defined within a function
// block scope -> variables defined within a block (e.g., an if statement)


```

11. Write out what would be printed to the console, in order, if the script below were run in a browser. 

```javascript

console.log(person) 

let person = "Lady Gaga" // => error

function someFunction(){
  console.log(person) // Lady Gaga

  function otherFunction(){
    let otherPerson = "Madonna"

    console.log(person) // Lady Gaga
    console.log(otherPerson) // Madonna
  }

  otherFunction()

  console.log(person) // Lady Gaga
  console.log(otherPerson) // => error
}

someFunction()

console.log(otherPerson) // => error
```


12. What would be printed to the console in the example below? Why?

```javascript
if(true){
  let dogName = "Neikko"
  console.log(`My dog's name is ${dogName}`)
}

console.log(`My dog's name is ${dogName}`)

// My dog's name is undefined
// Because dogName is declared inside the if block
// and isn't available outside of it
```

```
Block scope means that the dogName variable is not visible outside of the if statement
```

#### Hoisting

13. In your own words, describe hoisting?

```
```

14. If I had a JavaScript file with the following code, what would happen in each of the function calls below? Why?

```javascript
bark()
meow() // error because meow wouldn't be hoisted

function bark(){
  console.log("woof woof")
}

let meow = function(){
  console.log("meeeeooooowwr")
}
```

```
```

15. What will the console.log print in each of the examples below? Why?

```javascript
console.log(dogName) // undefined because it is hoised

var dogName = "Perky"
```

```javascript
console.log(catName) // error, not hoisted

const catName = "Houdini"
```

16. What will the console.log print in the example below? Why?

```javascript
horse = "Benny"
console.log(horse) // Benny because `horse` is hoisted on creation phase and defined on execution phase
var horse
```

```
```

17. With regard to hoisting, what's the difference between `let`, `var`, and `const`

```
```

### Variable declaration

18. What are the differences between declaring variables using `let`, `var`, and `const`?

```
```

### First Class Functions

19. Write a function that accepts a number (e.g. *x*) as a parameter and returns an inner function that accepts a different number (e.g. *y*) as a parameter and returns the product of it and the number from the outer function.

```javascript
function multiplier(x){
  return function(y){
    return x * y
  }
}
```

20. Using the function from above, create a function that accepts a number as a parameter and returns its double. 

```javascript
let doubler = multiplier(2)
doubler(4) //=> 8
```

21. If you successfully got the question above working, explain how you utilized closures to do so?

```
```

22. What would get printed to the console in the example below?

```javascript
let steven = {
  name: "Steven",
  goForRun: function(distance){
    console.log(`Today I ran ${distance} km.`)
  }
}

steven.goForRun // what would happen here? => reference to function

steven.goForRun() // function invocation 
```
