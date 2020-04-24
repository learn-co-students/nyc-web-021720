import React from 'react';
import Navbar from './Navbar';
import HomeView from './HomeView';
import GridView from './GridView';
import CreateAccount from './CreateAccount';
import { TopLevelStyle } from './styled';


class App extends React.Component {
  state = {
    view: 'home',
    media: [],
    search: '',
    // watchList: [] // ids NOT OBJECTS 
  }

  componentDidMount() {
    fetch('http://localhost:3000/media')
    .then(res => res.json())
    .then(data => {
        this.setState({ media: data })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.view !== this.state.view){
      this.setState({ search: '' })
    }
  }


  switchView = type => {
    this.setState({ view: type })
  }

  handleSearchChange = (event) => {
    // console.log(event.target.value)
    this.setState({ search: event.target.value })
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

  
  render(){
    let { media, search, view } = this.state;
    let searchedMedia = media.filter( item => item.name.toLowerCase().includes(search.toLowerCase()) )
    // "boy meets world".includes("") ===> true for any string

    return (
      <TopLevelStyle>
        <Navbar 
          switchView={this.switchView} 
          handleSearchChange={this.handleSearchChange}
          search={search}/>
        {view === 'home' &&  <HomeView media={searchedMedia} switchWatchList={this.switchWatchList}/>}
        {view === 'list' && <GridView title={"My Watch List"} media={searchedMedia.filter(item => item.inWatchList)} switchWatchList={this.switchWatchList}/>}
        {view === 'tv' && <GridView title={"TV Shows"} media={searchedMedia.filter(item => item.type === 'TV')} switchWatchList={this.switchWatchList}/>}
        {view === 'movies' && <GridView title={"Movies"} media={searchedMedia.filter(item => item.type === 'Movie')} switchWatchList={this.switchWatchList}/>}
        {view === 'account' && <CreateAccount switchView={this.switchView}/>}
      </TopLevelStyle>
    );
  }
}

export default App;
