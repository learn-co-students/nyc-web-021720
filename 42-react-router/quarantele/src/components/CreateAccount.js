import React from 'react';
import { useHistory } from 'react-router-dom';
import { VerticalFlex } from '../styled';


const initialState = {
    name: '',
    username: '',
    password: '',
    confirmation: '',
    bio: '',
    image: ''
}

class CreateAccount extends React.Component {

    state = initialState

    handleChange = event => {
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        // let history = useHistory();
        let { password, confirmation } = this.state;

        if(password === confirmation){
            this.setState(initialState)
            this.props.history.push('/home')
            // NO MORE WITH REACT ROUTER this.props.switchView('home') // move the user to the home view 
        } else {
            alert('Password and Confirmation need to match')
        }
    }

    render() {
        // console.log('create acct props:', this.props.history.push)
        return (
            <form onSubmit={this.handleSubmit}>
                <VerticalFlex>
                <h1>Create Account</h1>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <label>
                    Confirm Password:
                    <input name="confirmation" type="password" value={this.state.confirmation} onChange={this.handleChange}/>
                </label>
                <label>
                    Bio:
                    <input name="bio" type="text" value={this.state.bio} onChange={this.handleChange}/>
                </label>
                <label>
                    Image:
                    <input name="image" type="text" value={this.state.image} onChange={this.handleChange}/>
                </label>
                <input type="submit" />
                </VerticalFlex>
            </form>
        )
    }
}

export default CreateAccount;