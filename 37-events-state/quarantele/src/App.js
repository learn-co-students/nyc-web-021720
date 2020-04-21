import React from 'react';
import Navbar from './Navbar';
import HomeView from './HomeView';
import { TopLevelStyle } from './styled';

const App = props => {
  return (
    <TopLevelStyle>
      <Navbar />
      <HomeView />
    </TopLevelStyle>
  );
}

export default App;
