import React, {useState} from 'react';

const App = (props) => {
    const [search, setSearch] = useState('');

    const searchSmth = (e) => {
        e.preventDefault();
        props.onSubmit(search);
    }

    return (
        <div className='ui container' style={{marginTop: '20px'}}>
            <div className='ui segment'>
                <form onSubmit={(e) => searchSmth(e)} className='ui form'>
                    <div className='filed'>
                        <label forhtml='search'>Search</label>
                        <input name='search' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
