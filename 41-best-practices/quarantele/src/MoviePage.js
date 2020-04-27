import React from 'react';

const MoviePage = props => {
    return (
        <div>
            <iframe 
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SfBBMeh7uuM"
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default MoviePage;