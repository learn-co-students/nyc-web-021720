import React from 'react';
import CarouselCard from './CarouselCard';
import { FlexGrid } from './styled';

const allGenres = ["comedy", "adventure", "family", "drama", "action", "animation", "crime"]


class GridView extends React.Component {
    state = {
        genre: ''
    }

    handleChange = event => {
        this.setState({ genre: event.target.value})
    }

    renderFilterRow = () => {
        return (
            <div>
                <label> Genre: 
                    <select value={this.state.genre} onChange={this.handleChange}>
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

    render() {
        console.log(this.state.genre)
        let filteredMedia = this.props.media.filter(item => {
            if (this.state.genre === ''){
                return true
            } else {
                return item.genres.includes(this.state.genre)
            }
        })

        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.renderFilterRow()}
                <FlexGrid>
                    {filteredMedia.map(item => (
                        <CarouselCard 
                            key={item.id} 
                            {...item}
                            selectMovie={() => {}}
                            switchWatchList={this.props.switchWatchList}/>
                    ))}
                </FlexGrid>
            </div>
        )
    }
}

export default GridView;