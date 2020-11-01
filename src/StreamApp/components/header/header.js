import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui five item menu">
            <Link className="item" to="/">Streams List</Link>
            <Link className="item" to="/streams/show">Streams Show</Link>
            <Link className="item" to="/streams/new">Streams Create</Link>
            <Link className="item" to="/streams/delete">Streams Delete</Link>
            <Link className="item" to="/streams/edit">Streams Edit</Link>
        </div>
    );
}

export default Header;