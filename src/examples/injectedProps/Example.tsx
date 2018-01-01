import * as React from 'react';
import Message from './Message';

interface State {
    isLoggedIn: boolean;
}

export default class extends React.PureComponent<{}, State> {
    state: State = {
        isLoggedIn: false
    }

    onLogInButtonClicked = () => {
        this.setState((prevState:State) => {
            return {isLoggedIn: !prevState.isLoggedIn};
        });
    }

    render() {
        return [
                <button onClick={this.onLogInButtonClicked}>
                    {this.state.isLoggedIn ? "Log out" : "Log in"}
                </button>,
                <Message message="you must be logged in to read this message"
                    isLoggedIn={this.state.isLoggedIn}/>
            ];
    }
}