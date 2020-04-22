import React from 'react';
import { VerticalFlex } from './styled';


class CreateAccount extends React.Component {

    render() {
        return (
            <form>
                <VerticalFlex>
                <h1>Create Account</h1>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    Username:
                    <input type="text" />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" />
                </label>
                <label>
                    Bio:
                    <input type="text" />
                </label>
                <label>
                    Image:
                    <input type="text" />
                </label>
                <input type="submit" />
                </VerticalFlex>
            </form>
        )
    }
}

export default CreateAccount;