import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    
    render() {
        return( 
            <div className='ui segment search-bar'>
                <form onSubmit={(e) => this.props.onSubmit(e)} className='ui form'>
                <div className='field'>
                    <label>Video Search</label>
                    <input 
                        type='text' 
                        value={this.state.search} 
                        onChange={(e) => this.setState({ search: e.target.value })}
                    />
                </div>
                </form>
            </div>
        );
    }
}

export default Search;