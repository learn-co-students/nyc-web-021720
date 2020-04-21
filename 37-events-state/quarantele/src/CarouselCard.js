import React from 'react';
import { CarouselImg, StyledCard } from './styled';

const CarouselCard = props => {

    console.log(props)
    return (
        <StyledCard>
            <CarouselImg key={props.id} src={props.image} alt={props.name}/>
            <div className="card-options">
                <div>Likes: 0</div>
                <div>Watch Later?</div>
            </div>
        </StyledCard>
    )
}

export default CarouselCard;