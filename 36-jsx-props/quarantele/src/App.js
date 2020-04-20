import React from 'react';
import './App.css';
import Navbar from './Navbar';
import HomeView from './HomeView';

const App = props => {
  return (
    <div className="App">
      <Navbar />
      <HomeView />
    </div>
  );
}

export default App;
