import React from 'react';
import { CarouselContainer, CarouselRow } from '../styled';
import CarouselCard from '../components/CarouselCard';

class CategoryCarousel extends React.Component {

    state = {
        startIndex: 0
    }


    handleClick = () => {
        let newIndex = this.state.startIndex + 4

        // setState taking an object as its argument
        // this.setState({ startIndex: this.props.media.length <= newIndex ? 0 : newIndex })

        // a function
        this.setState( prevState => { // argument is the MOST UPDATED VERSION OF STATE 
            let newIndex = prevState.startIndex + 4
            return { startIndex: this.props.media.length <= newIndex ? 0 : newIndex }
        })
    }

    render() {

        return (
            <CarouselContainer>
                <h2>{this.props.title}</h2>
                <CarouselRow>
                    {this.props.media.slice(this.state.startIndex, this.state.startIndex + 4).map(item => {
                        return (
                            <CarouselCard 
                                key={item.id} 
                                {...item}
                                selectMovie={this.props.selectMovie}
                                switchWatchList={this.props.switchWatchList}/>
                        )
                    })}
                    <div onClick={this.handleClick}>Next</div>
                </CarouselRow>
            </CarouselContainer>
        )
    }
}

export default CategoryCarousel;