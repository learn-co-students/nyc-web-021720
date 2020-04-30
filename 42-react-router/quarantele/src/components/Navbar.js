import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavRow } from '../styled';


class Navbar extends React.Component {

    render(){
        return (
            <NavRow>
                <NavLink to="/home">Quarantele<span role="img" aria-label="tv">📺</span></NavLink>
                {/* <div onClick={() => this.props.switchView('home')}></div> */}
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/tv">TV</NavLink>
                <input placeholder="Enter title to search..." onChange={this.props.handleSearchChange} value={this.props.search}/>
                <NavLink to="/list">My Watch List</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </NavRow>
        )
    }
}

export default Navbar;