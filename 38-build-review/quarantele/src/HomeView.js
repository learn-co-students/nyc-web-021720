import React from 'react';
import Preview from './Preview';
import CategoryCarousel from './CategoryCarousel';
// import { tvShowData } from './data';

class HomeView extends React.Component {
    state = {
        media: [],
        previewId: null
    }

    selectMovie = (id) => {
        console.log('inside select movie with id: ', id)
        this.setState({ previewId: id })
    }

    fetchMedia = () => {
        fetch('http://localhost:3000/media')
            .then(res => res.json())
            .then(data => {
                // MOD3 DOM MANIPULATION
                this.setState({ media: data })
            })
    }

    render() {
        console.log('inside home view ', this.state)
        let { media, previewId } = this.state;  // DECONSTRUCTION GLORY

        let previewMovie = media.find(item => item.id === previewId)

        let justMovies = media.filter(item => item.type === 'Movie')
        let justTV =  media.filter(item => item.type === 'TV')
        let justPopular =  media.filter(item => item.IMDBRating >= 7)
    
        return (
            <div>
                <div onClick={this.fetchMedia}>GET MEDIA</div>
                { previewMovie && <Preview {...previewMovie} />  }
                <CategoryCarousel title="All Media" media={media} selectMovie={this.selectMovie}/>
                <CategoryCarousel title="Just Movies" media={justMovies} selectMovie={this.selectMovie}/>
                <CategoryCarousel title="Just TV" media={justTV} selectMovie={this.selectMovie}/>
                <CategoryCarousel title="Just Popular" media={justPopular} selectMovie={this.selectMovie}/>
            </div> 
        )
    }
}

export default HomeView;