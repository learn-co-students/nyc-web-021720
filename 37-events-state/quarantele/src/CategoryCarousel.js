import React from 'react';
import { CarouselContainer, CarouselRow } from './styled';
import CarouselCard from './CarouselCard';

const CategoryCarousel = props => {

    console.log(props)
    return (
        <CarouselContainer>
            <h2>{props.title}</h2>
            <CarouselRow>
                {props.media.slice(0,4).map(item => {
                    return (
                        <CarouselCard key={item.id} image={item.image} name={item.name}/>
                    )
                })}
                <div>Next</div>
            </CarouselRow>
        </CarouselContainer>
    )
}

export default CategoryCarousel;