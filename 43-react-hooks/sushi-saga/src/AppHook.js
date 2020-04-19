import React, { Component, useState, useEffect } from 'react';
import SushiContainer from './containers/SushiContainerHook';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
              
function App(props) {
  
  const [getSushis, setSushis] = useState([]) // getSushis ==== this.state.sushis and setSushi is like this.setState({ sushis: ______})
  const [getEatenSushis, setEatenSushis] = useState([]) // can you pass this a function?
  const [getBudget, setBudget] = useState(105) // explore more async with hooks 
  
  useEffect( () => {           
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setSushis(data)
    })
  }, [])

  const eatSushi = (id, price, eaten ) => {
    if(price <= getBudget && !eaten){ 
      let newSushis = getSushis.map(sushi => { 
        if(sushi.id === id){ 
            sushi.eaten = true
          }
          return sushi 
      })
      setBudget( getBudget - price )
      setEatenSushis( [...getEatenSushis, id] )
      setSushis( newSushis )
    } else {
      window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSklpwBW2RjOugiPzZ1iu1tED80vDAO8BoMwhwb1VdBD7WQ7nh0")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={getSushis} eatSushi={eatSushi} />
      <Table eatenSushis={getEatenSushis} budget={getBudget} />
    </div>
  );
}

export default App;