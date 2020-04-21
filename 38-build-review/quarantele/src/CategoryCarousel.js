import React from 'react';
import { CarouselContainer, CarouselRow } from './styled';
import CarouselCard from './CarouselCard';

class CategoryCarousel extends React.Component {

    // EVENT PERSISTENCE TECHNIQUES 
    // const handleClick = event => {
    //     console.log('first time', event.type)
    //     event.persist()
    //     let type = event.type
    //     setTimeout(() => {
    //         console.log(event.type)
    //     }, 2000)
    // }



    // state ==> startIndex needs to be on state

    // OLD SCHOOL
    // constructor() {
    //     super();

    //     this.state = {
    //         startIndex: 0 
    //     }

    //     this.handleClick = this.handleClick.bind(this)
    // }

    state = {
        startIndex: 0
    }


    handleClick = () => {
        // console.log(this)
        // update startIndex to be the old value + 4

        // NO GO!!! DO NOT MUTATE STATE!!!
        // this.state.startIndex += 4
        // ONLY USE SETSTATE EVER!!!
        
        let newIndex = this.state.startIndex + 4
        // if (this.props.media.length <= newIndex){
        //     newIndex = 0
        // }
        // this.setState({ startIndex: newIndex })

        this.setState({ startIndex: this.props.media.length <= newIndex ? 0 : newIndex })
    }

    render() {
        console.log('in the render', this.state)

        return (
            <CarouselContainer>
                <h2>{this.props.title}</h2>
                <CarouselRow>
                    {this.props.media.slice(this.state.startIndex, this.state.startIndex + 4).map(item => {
                        return (
                            <CarouselCard key={item.id} id={item.id} image={item.image} name={item.name} selectMovie={this.props.selectMovie}/>
                        )
                    })}
                    <div onClick={this.handleClick}>Next</div>
                </CarouselRow>
            </CarouselContainer>
        )
    }
}

export default CategoryCarousel;