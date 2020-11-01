import React from 'react';

const Nav = ({ setPathName }) => {
    const changeUrl = (newUrl) => {
        window.history.pushState({}, null, newUrl);
        setPathName(newUrl);
    }

    return(
        <nav style={{display: 'flex', columnGap: '10px'}}>
            <a style={{cursor: 'pointer'}} onClick={() => changeUrl('/accordion')} >Accordion</a>
            <a style={{cursor: 'pointer'}} onClick={() => changeUrl('/list')}>List</a>
            <a style={{cursor: 'pointer'}} onClick={() => changeUrl('/dropdown')}>DropDown</a>
            <a style={{cursor: 'pointer'}} onClick={() => changeUrl('/translate')}>Translate</a>
        </nav>
    );
}

export default Nav;