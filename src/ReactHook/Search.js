import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [search, setSearch] = useState('programming');
    const [debouncedSearch, setDebouncedSearch] = useState('programming');
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(timeoutID);
        }
    }, [search]);

    useEffect(() => {
        const getData = () => {
            axios.get(`http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${debouncedSearch}`)
            .then((result) => {
    
                if (result.data.query) {
                    setResult(result.data.query.search);
                }
    
            }).catch((error) => {
                console.log(error);
            });
        }

        getData();
        
    }, [debouncedSearch]);

    const onChangeHandler = (event) => {
        setSearch(event.target.value);
    }

    const renderResults = result.map((singleResult) => {
        return(
            <div className="item" key={singleResult.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikiperdia.org?curid=${singleResult.pageid}`}> Go </a>
                </div>
            <div className="content">
                <div className="header">
                    {singleResult.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: singleResult.snippet }}></span>
            </div>
            </div>
        );
    });

    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input' type='text' value={search} onChange={(event) => onChangeHandler(event)}/>
                </div>
            </div>
            <div className="ui celled list"> {renderResults} </div>
        </div>
    );
}

export default Search;