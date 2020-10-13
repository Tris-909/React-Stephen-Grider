import React from 'react';
import SeasonDisplay from './seasonDisplay';

class App extends React.Component {
    state = {
        latitude: null,
        error: null,
        loading: false
    }

    getLocation = () => {
        this.setState({ loading: true });
        window.navigator.geolocation.getCurrentPosition(
            (result) => this.setState({
                latitude: result.coords.latitude,
                loading: false
            }),
            (error) => this.setState({
                error: error.message,
                loading: false 
            }) 
        );
    }

    showContent = () => {
        let content;
        if (this.state.loading) {
            content = 'loading...';
        } else {
            if (this.state.latitude) {
                content = <SeasonDisplay lat={this.state.latitude} />;
            } else {
                content = this.state.error;
            }
        }
        return content;
    }

    componentDidMount()  {
        this.getLocation();
    }

    render() {
        return(
            <h1>{this.showContent()}</h1>
        )
    }
}

export default App;