import React from 'react';
import { VideoView } from '../styled';

const MoviePage = props => {
    return (
        <div>
            <VideoView 
                src="https://www.youtube.com/embed/SfBBMeh7uuM"
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </VideoView>
            <h1>Family Matters</h1>
            <p>Policeman Carl Winslow has enough to deal with on the job. But when he gets home, he still has to handle kids, his wife, Harriette (whose character was first introduced on the sitcom 'Perfect Strangers'), his mom, a sister-in-law and Urkel, the nerd next door who doesn't understand that he doesn't actually live with the Winslows.</p>
        </div>
    )
}

export default MoviePage;