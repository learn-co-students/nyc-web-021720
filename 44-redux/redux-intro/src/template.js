
// IN REDUCER.JS

let defaultState = {
}

let reducer = (prevState=defaultState, action) => {
    switch(action.type){
        default:
          return prevState
    }
}

export default reducer;




// IN INDEX.JS
// import { createStore } from 'redux';

// let store = createStore(reducer)

// WHEN USING REACT REDUX
// <Provider store={store}><App /></>Provider


// WHEN JUST USING REDUX 
// store.dispatch({type: 'SOME TYPE', payload: {payload_key: "SOME VALUE"}})
