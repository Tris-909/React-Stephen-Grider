import React from 'react';
import App from './Input';
import Image from './Image';
import './Image.css';
import axios from 'axios';

class SearchApp extends React.Component {
    state = {
        imageLinks: []
    }

    onSubmitHandler = (text) => {
        axios.get(`https://api.unsplash.com/search/photos?client_id=pOM87qkEJXpwnOq3x8DswCD0BPDiwg6JPxLIsLRpHnk&query=${text}`).then((result) => {
            console.log(result);
            this.setState({
                imageLinks: result.data.results
            })
        }).catch((err) => {
            console.log(err);
        });
    }


    render() {
        let result;
        if (this.state.imageLinks !== undefined) {
            result = this.state.imageLinks.map((link) => {
                return <Image key={link.id} link={link.urls.regular} />
            }); 
        }


        return(
            <div>
                <App onSubmit={this.onSubmitHandler}/>
                <div className='grid'>
                    { result }
                </div>
            </div>
        );
    }
}

export default SearchApp;