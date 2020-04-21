import React from 'react';
import { CarouselImg, StyledCard } from './styled';

const CarouselCard = props => {

    // console.log(props)
    console.log('props in card', props)
    return (
        <StyledCard>
            <CarouselImg src={props.image} alt={props.name} onClick={() => props.selectMovie(props.id)}/>
            <div className="card-options">
                <div>Likes: 0</div>
                <div>Watch Later?</div>
            </div>
        </StyledCard>
    )
}

export default CarouselCard;