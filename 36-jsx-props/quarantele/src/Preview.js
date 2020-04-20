import React from 'react';

const Preview = props => {
    let { id, name, image, description, genres, type, rating, IMDBRating } = props;
    console.log('preview props:', image)

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <ul>
                {genres.map((genre, ind) => <li key={ind}>{genre}</li>)}
            </ul>
        </div>
    )
}

export default Preview;