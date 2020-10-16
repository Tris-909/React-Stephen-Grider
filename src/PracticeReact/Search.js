import React, {useState} from 'react';

const Search = (props) => {
    const [search, setSearch] = useState('');
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(search);
    }

    return( 
        <div className='ui segment search-bar'>
            <form onSubmit={onSubmitHandler} className='ui form'>
            <div className='field'>
                <label>Video Search</label>
                <input 
                    type='text' 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            </form>
        </div>
    );
}

export default Search;