import React from 'react';
import Preview from './Preview';
import CategoryCarousel from './CategoryCarousel';

const allGenres = ["comedy", "adventure", "family", "drama", "action", "animation", "crime"]

class HomeView extends React.Component {
    state = {
        previewId: null
    }

    // switchWatchList = id => { // WITHOUT THE MAP TRICK
    //     // find the right movie/tv show using an id
    //     let targetMedia = this.state.media.find(item => item.id === id)
    //     let targetIndex = this.state.media.findIndex(item => item.id === id)
    //     // once I find it, create a copy and add attribute inWatchList: true
    //     let updatedTarget = {...targetMedia, inWatchList: true}
    //     // then create a new array of media 
    //     let updatedMedia = [...this.state.media]
    //     updatedMedia[targetIndex] = updatedTarget
    //     // and setState
    //     this.setState({ media: updatedMedia  })
    // }

    
    selectMovie = (id) => {
        this.setState({ previewId: id })
    }
    
    render() {
        console.log('inside home view ', this.state)
        let { previewId } = this.state;  // DECONSTRUCTION GLORY
        let { media } = this.props; 

        let previewMovie = media.find(item => item.id === previewId)

        let justMovies = media.filter(item => item.type === 'Movie')
        let justTV =  media.filter(item => item.type === 'TV')
        let justPopular =  media.filter(item => item.IMDBRating >= 7)
    
        return (
            <div>
                <div onClick={this.props.fetchMedia}>GET MEDIA</div>
                { previewMovie && <Preview {...previewMovie} />  }
                <CategoryCarousel 
                    title="All Media" 
                    media={media} 
                    selectMovie={this.selectMovie}
                    switchWatchList={this.props.switchWatchList}/>
                <CategoryCarousel 
                    title="Just Popular" 
                    media={justPopular} 
                    selectMovie={this.selectMovie}
                    switchWatchList={this.props.switchWatchList}/>
                {allGenres.map((genre, ind) => <CategoryCarousel 
                    key={ind}
                    title={genre} 
                    media={media.filter(item => item.genres.includes(genre))} 
                    selectMovie={this.selectMovie}
                    switchWatchList={this.props.switchWatchList}/>)}
            </div> 
        )
    }
}

export default HomeView;