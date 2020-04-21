import React from 'react';
import CarouselCard from './CarouselCard';
import { FlexGrid } from './styled';

const GridView = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <FlexGrid>
                {props.media.map(item => (
                    <CarouselCard key={item.id} id={item.id} image={item.image} name={item.name} selectMovie={() => {}}/>
                ))}
            </FlexGrid>
        </div>
    )
}

export default GridView;