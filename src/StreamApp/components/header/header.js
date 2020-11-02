import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';

//! ClientID 880393315779-d4l88vaqhreegj8ehnu26fguilt9uusp.apps.googleusercontent.com
//! ClientSecret KienL_Akw6SWFB-Los9DP6TJ

const Header = () => {
    return(
        <div className="ui six item menu">
            <Link className="item" to="/">Streams List</Link>
            <Link className="item" to="/streams/show">Streams Show</Link>
            <Link className="item" to="/streams/new">Streams Create</Link>
            <Link className="item" to="/streams/delete">Streams Delete</Link>
            <Link className="item" to="/streams/edit">Streams Edit</Link>
            <div className="item"> <GoogleAuth/> </div>
        </div>
    );
}

export default Header;