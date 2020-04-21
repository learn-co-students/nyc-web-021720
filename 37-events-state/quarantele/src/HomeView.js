import React from 'react';
import Preview from './Preview';
import CategoryCarousel from './CategoryCarousel';
import { tvShowData } from './data';

const HomeView = props => {
    let justMovies = tvShowData.filter(item => item.type === 'Movie')
    let justTV =  tvShowData.filter(item => item.type === 'TV')
    let justPopular =  tvShowData.filter(item => item.IMDBRating >= 7)

    return (
        <div>
            <Preview {...tvShowData[0]} />
            <CategoryCarousel title="All Media" media={tvShowData} />
            <CategoryCarousel title="Just Movies" media={justMovies} />
            <CategoryCarousel title="Just TV" media={justTV} />
            <CategoryCarousel title="Just Popular" media={justPopular} />
        </div> 
    )
}

export default HomeView;