React Best Practices
====================

## SWBAT

- [ ] Write cleaner React code

## Objectives

- Opinions
  - [x] Code Organization/file structure 
        - Folders: Components & Containers, orrrr organized by resource
  - [x] Presentational vs Container components

- Optimizations:
  - [X] Functional vs Class Components (required for state & lifecycle methods)
  - [X] Fragments

- Best Practices:
  - [X] Functional setState
  - [X] "then" callback for setState
  - [X] Callbacks (avoid useless wrapping)

- JS tricks/bugs often seen in React:
  - [ ] Arrow functions returning objects () => ({ })
  - [ ] Destructuring  ====> let { likes, name } = this.props
  - [ ] Spread (w/ prepend and append) this.setState({ messages: [...this.state.messages, 'newmessage']})
  - [ ] Objects with the same key/value name ===> let myPerson = {firstName, lastName}
  - [ ] constructor vs. ES7 instance variables ===> ie state = {}
  - [ ] dynamic keys ==>  { [variable]: "as_key" } 

- Too Involved for RN
    - [ ] HOCs Magic magic magic!

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)
[HOCs](https://reactjs.org/docs/higher-order-components.html)

## Lecture Notes

