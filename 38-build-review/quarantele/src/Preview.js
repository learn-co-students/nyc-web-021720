import React from 'react';
import { StyledPreview, PreviewText } from './styled';

const Preview = props => {
    let { id, name, image, description, genres, type, rating, IMDBRating } = props;
    console.log('preview props:', image)

    return (
        <StyledPreview image={image}>
            <PreviewText>
                <h1>{name}</h1>
                <p>{description}</p>
                <ul>
                    {genres.map((genre, ind) => <li key={ind}>{genre}</li>)}
                </ul>
            </PreviewText>
        </StyledPreview>
    )
}

export default Preview;