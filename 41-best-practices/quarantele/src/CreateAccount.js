import React from 'react';
import { VerticalFlex } from './styled';


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
        let { password, confirmation } = this.state;

        if(password === confirmation){
            // post the user info to my backend... don't have one of those rn
            // clear the form 
            // MOD 3 ===> form.reset() ===> STILL RELYING ON HTML STATE
            this.setState(initialState)
            this.props.switchView('home')
    
            // redirect the user to a different view ====> fake this actually pre Router

        } else {
            alert('Password and Confirmation need to match')
        }

    }

    // handleNameChange = event => {
    //     this.setState({ name: event.target.value })
    // }

    // handleUsernameChange = event => {
    //     this.setState({ username: event.target.value })
    // }

    // handlePasswordChange = event => {
    //     this.setState({ password: event.target.value })
    // }

    render() {
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