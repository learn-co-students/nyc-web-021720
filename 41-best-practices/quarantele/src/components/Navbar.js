import React from 'react';
import { NavRow } from '../styled';


class Navbar extends React.Component {

    render(){
        return (
            <NavRow>
                <div onClick={() => this.props.switchView('home')}>Quarantele<span role="img" aria-label="tv">📺</span></div>
                <div onClick={() => this.props.switchView('home')}>Home</div>
                <div onClick={() => this.props.switchView('movies')}>Movies</div>
                <div onClick={() => this.props.switchView('tv')}>TV</div>
                <input placeholder="Enter title to search..." onChange={this.props.handleSearchChange} value={this.props.search}/>
                <div onClick={() => this.props.switchView('list')}>My Watch List</div>
                <div onClick={() => this.props.switchView('account')}>Login/Create Account</div>
            </NavRow>
        )
    }
}

export default Navbar;