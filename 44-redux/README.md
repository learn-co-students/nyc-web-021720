Intro to Redux
==============

## SWBATs

### Message Passing
- [ ] Explain the pattern / technique of message passing
- [ ] Refactor a component's behavior to use message passing 

### Redux
- [ ] Install the redux library so it can be used in a project.
- [ ] Create a `store` in redux with some default `state`.
- [ ] Create a `reducer` to change `state` based on an `action.type`.
- [ ] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [ ] Read `state` in the `store`.

### React Redux
- [ ] Install the `react-redux` library so it can be used in a project.
- [ ] Make the `store` available to their application by using the `Provider` component.
- [ ] Use `connect` to give components the ability to listen for changes to the `store`.
- [ ] Use `dispatch` in a React component.
- [ ] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [ ] Use `mapDispatchToProps`
- [ ] Rethinking in React with Redux

### Redux-Thunk
- [ ] Install the `redux-thunk` library
- [ ] Use `applyMiddleware` from the redux library and `thunkMiddleware` from the redux-thunk library
- [ ] Create action creators that return functions in order to dispatch asynchronously
- [ ] Discuss best practices of action architecture when using thunk


![React State vs. Redux][visual]

[visual]: https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg

Redux **will** test your JavaScript knowledge to the **MAX**!!!


## Lecture Notes


### Message Passing



### Questions from labs & reading


### Parking Lot 




### What is Message Passing?
```
"Message passing is a technique for invoking behavior (i.e., running a program) on a computer. In contrast to the traditional technique of calling a program by name, message passing uses an object model to distinguish the general function from the specific implementations. The invoking program sends a message and relies on the object to select and execute the appropriate code." -Wikipedia
```

Message passing is built on the idea of centralization of program flow: all program flows pass through **one** central function, which in turn invokes the desired functionality. In order to do this, the central function needs to be told 2 things: **a type** which tells the central function which function to call, and, because functions sometimes need data, **a payload** which contains all of the data needed to run the desired function (usually an object).

### Vocabulary
- [ ] Redux - state management (library) (best) for large programs
- [ ] store - object that serves as the ultimate source of truth for the app. like a cloud. and has getState and dispatch methods 
- [ ] reducer - case switch that returns the new version of state 
- [ ] getState() - current version of the store. READ
- [ ] dispatch() - a function that takes an arg of an action and calls the reducer (and updates our store)
- [ ] action - object that has a key of type and maybe payload and determines the reducer behavior
- [ ] type - command! a string
- [ ] payload - data! optional

### React Redux
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] Provider
- [ ] connect()

### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```


### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)


### Additional Resources
- [Redux Thunk Walkthrough](https://alligator.io/redux/redux-thunk/)




