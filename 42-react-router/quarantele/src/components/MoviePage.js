import React from 'react';
import { VideoView } from '../styled';

const MoviePage = props => {
    // props.match.params.id ==> to find the right movie 
    // the whole array of movies props.media

    let displayedMedia = props.media.find(item => item.id === parseInt(props.match.params.id))

    // let { name, video, description } = displayedMedia;

    return displayedMedia
        ? (<div>
            <button onClick={props.history.goBack}>Go Back</button>
            <VideoView 
                src={displayedMedia.video}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </VideoView>
            <h1>{displayedMedia.name}</h1>
            <p>{displayedMedia.description}</p>
        </div>)
        : <div> Loading</div>
}

export default MoviePage;