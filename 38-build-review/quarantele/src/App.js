import React from 'react';
import Navbar from './Navbar';
import HomeView from './HomeView';
import GridView from './GridView';
import { TopLevelStyle } from './styled';
import { tvShowData } from './data';


class App extends React.Component {
  state = {
    view: 'home',
    media: []
  }

  switchView = type => {
    this.setState({ view: type })
  }


  switchWatchList = id => { // SNAZZY MAP THINGS
    let updatedMedia = this.state.media.map(media => {
        if(media.id === id){
            return {...media, inWatchList: !media.inWatchList}
        }
        return media
    })

    this.setState({ media: updatedMedia  })
  }

  fetchMedia = () => {
    fetch('http://localhost:3000/media')
    .then(res => res.json())
    .then(data => {
        this.setState({ media: data })
    })
  }

  render(){
    let { media } = this.state;

    return (
      <TopLevelStyle>
        <Navbar switchView={this.switchView}/>
        {this.state.view === 'home' &&  <HomeView media={media} fetchMedia={this.fetchMedia} switchWatchList={this.switchWatchList}/>}
        {this.state.view === 'tv' && <GridView title={"TV Shows"} media={media.filter(item => item.type === 'TV')}/>}
        {this.state.view === 'movies' && <GridView title={"Movies"} media={media.filter(item => item.type === 'Movie')}/>}
      </TopLevelStyle>
    );
  }
}

export default App;
