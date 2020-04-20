Intro to React
=============================

## SWBATs
- [ ] Recognize declarative and imperative coding paradigms
- [ ] Visualize/identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Briefly explain Babel's purpose in React
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions
- [ ] LUNCHWORK ==> App ideas 

## Notes

Transitioning to React
 - always need babel enabled ==> this will look a lil different afternoon lecture forward
 - camelCase errythang (ie className)
 - always have to return one top level div / element 
 - props are to components as arguments are to functions
 - get comfy with... arrow funcs, destructuring, ternary operator, and spread operator (starting this afternoon) 
 - MOST IMPORTANT: read your errors

### Declarative vs Imperative Programming

declarative - make me a double bacon cheeseburger plz! 
imperative - medium, diameter of exactly 6 inches, height of 1.5 inches, chop the lettuce 

#### Imperative
```js
const header = document.createElement('h1')
header.innerText = 'Wassup yall'
header.class = "screaming"

const container = document.querySelector('#container')
container.append(header)
```

#### Declarative
```js

function addHeader(){
    const header = document.createElement('h1')
    header.innerText = 'Wassup yall'
    header.class = "screaming"
    
    const container = document.querySelector('#container')
    container.append(header)
}

addHeader()

```


### Abstractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```

Second form: *Dynamic, reusable components using regular functions and arguments*


Third Form: *Static components using JSX*


FINAL FORM: *Dynamic, reusable components using JSX and props*


## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)



### Parking Lot 
