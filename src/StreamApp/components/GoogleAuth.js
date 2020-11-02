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
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
            }); 
        });
    }
    
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed In</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>Not signed in</div>
        }
    }


    render() {
        return(
        <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;