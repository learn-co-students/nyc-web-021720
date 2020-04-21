import React from 'react';
import { CarouselImg, StyledCard } from './styled';

const CarouselCard = props => {
    return (
        <StyledCard>
            <CarouselImg src={props.image} alt={props.name} onClick={() => props.selectMovie(props.id)}/>
            <div className="card-options">
                <div>Likes: 0</div>
                <div onClick={() => props.switchWatchList(props.id)}>{props.inWatchList ? 'In Watch List' : 'Watch Later?'}</div>
            </div>
        </StyledCard>
    )
}

export default CarouselCard;