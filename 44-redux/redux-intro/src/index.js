import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';

let store = createStore(reducer)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



// console.log('dis our store: ', store)

// console.log('FIRST RIGHT AFTER CREATESTORE: ', store.getState())
// store.dispatch({type: 'LIKE'})
// store.dispatch({type: 'LIKE'})
// store.dispatch({type: 'LIKE'})
// store.dispatch({type: 'LIKE'})
// store.dispatch({type: 'TOGGLE'})
// store.dispatch({type: 'HANDLE_CHANGE', payload: { value: 'MOJO JOJO SAYS HI' }})
// console.log('show me that state: ', store.getState())