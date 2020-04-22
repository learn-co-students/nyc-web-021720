import React from 'react';
import Preview from './Preview';
import CategoryCarousel from './CategoryCarousel';

const allGenres = ["comedy", "adventure", "family", "drama", "action", "animation", "crime"]

class HomeView extends React.Component {
    state = {
        previewId: null
    }
    
    selectMovie = (id) => {
        this.setState({ previewId: id })
    }
    
    render() {
        let { previewId } = this.state; 
        let { media } = this.props; 

        let previewMovie = media.find(item => item.id === previewId)
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