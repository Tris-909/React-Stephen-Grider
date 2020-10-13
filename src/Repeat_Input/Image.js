import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.ImageRef = React.createRef();

        this.state = {
            height: null
        }
    }

    componentDidMount() {
        this.ImageRef.current.addEventListener('load', () => {
            this.setState({
                height: this.ImageRef.current.clientHeight
            });
        })
    }

    render() {
        return( 
            <img style={{gridRowEnd: `span ${Math.round(this.state.height/10)+1}`}}  ref={this.ImageRef} src={this.props.link} alt='error'/>
        );
    }
}

export default Image;