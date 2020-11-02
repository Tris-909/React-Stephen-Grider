import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../store/actions/actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '880393315779-d4l88vaqhreegj8ehnu26fguilt9uusp.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.onAuthChange);
            }); 
        });
    }
    
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    LogOutHandler = () => {
        this.auth.signOut();
    }

    signInHandler = () => {
        this.auth.signIn();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.GoogleAuth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);