import React from 'react';
import CarouselCard from './CarouselCard';
import { FlexGrid } from './styled';

const allGenres = ["comedy", "adventure", "family", "drama", "action", "animation", "crime"]


const GridView = props => {

    const renderFilterRow = () => {
        return (
            <div>
                <label> Genre: 
                    <select>
                        <option value="">All Genres</option>
                        {allGenres.map((genre, ind) => <option key={ind} value={genre}>{genre}</option>)}
                    </select>
                </label>
                <label> IMDB Rating:
                    <select>
                        <option value="">All Ratings</option>
                        {[1,2,3,4,5,6,7,8,9,10].map((num, ind) => <option key={ind} value={num}>{num}{num !== 10 && '+'}</option>)}
                    </select>
                </label>
            </div>
        )
    }
    return (
        <div>
            <h1>{props.title}</h1>
            {renderFilterRow()}
            <FlexGrid>
                {props.media.map(item => (
                    <CarouselCard 
                        key={item.id} 
                        {...item}
                        selectMovie={() => {}}
                        switchWatchList={props.switchWatchList}/>
                ))}
            </FlexGrid>
        </div>
    )
}

export default GridView;