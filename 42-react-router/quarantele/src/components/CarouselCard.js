import React from 'react';
import { useHistory } from 'react-router-dom';
import { CarouselImg, StyledCard } from '../styled';

const CarouselCard = props => {
    let history = useHistory();

    return (
        <StyledCard>
            <CarouselImg src={props.image} alt={props.name} onClick={() => history.push(`/play/${props.id}`)}/>
            <div className="card-options">
                <div onClick={() => props.switchWatchList(props.id)}>{props.inWatchList ? 'In Watch List' : 'Watch Later?'}</div>
            </div>
        </StyledCard>
    )
}

export default CarouselCard;