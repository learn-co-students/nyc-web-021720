import React from 'react';
import { NavRow } from './styled';


const Navbar = props => {
    return (
        <NavRow>
            <div onClick={() => props.switchView('home')}>Quarantele📺</div>
            <div onClick={() => props.switchView('home')}>Home</div>
            <div onClick={() => props.switchView('movies')}>Movies</div>
            <div onClick={() => props.switchView('tv')}>TV</div>
            <div>
                <input placeholder="Enter title to search..."/>
            </div>
            <div>Login/Create Account</div>
        </NavRow>
    )
}

export default Navbar;