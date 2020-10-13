import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {
            height: null
        }
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => {
            this.setState({
                height: this.imageRef.current.clientHeight
            })
        });
    }

    render() {
        return(
            <img style={{gridRowEnd: `span ${Math.ceil(this.state.height/10)+1}`}} ref={this.imageRef} className="ui centered medium image" src={this.props.link} alt="error"/>
        );
    }
}

export default Image;