import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '880393315779-d4l88vaqhreegj8ehnu26fguilt9uusp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });

                this.auth.isSignedIn.listen(this.onAuthChange);
            }); 
        });
    }
    
    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        });
    }

    LogOutHandler = () => {
        this.auth.signOut();
    }

    signInHandler = () => {
        this.auth.signIn();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return(
                <button className="ui red google button" onClick={this.LogOutHandler}>
                    <i className="google icon" />
                    Log Out
                </button>
            );
        } else {
            return(
                <button className="ui red google button" onClick={this.signInHandler}>
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }


    render() {
        return(
        <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;