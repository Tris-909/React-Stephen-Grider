import React, {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import DropDown from './DropDown';
import Translate from './Translate';
import Nav from './NavLink';

const items = [
    {
        title: 'What is React ?',
        content: 'React is a front end library framework'
    },
    {
        title: 'What is the date today ?',
        content: '14/10/2020'
    },
    {
        title: 'Are u tired ?',
        content: 'Dont die'
    }
];

const options = [
    {
        label: 'Red',
        value: 'red'
    }, 
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

const Widget = (props) => {
    const [selected, setSelected] = useState(options[0]);
    const [pathName, setPathName] = useState('/')

    const onSelectedHandler = (index) => {
        setSelected(options[index]);
    }

    let render = null;
    if (pathName === '/accordion') {
        render = (
            <Accordion items={items} />
        );
    } else if (pathName === '/list') {
        render = (
            <Search />
        );
    } else if (pathName === '/dropdown') {
        render = (
            <DropDown selected={selected} onSelectedHandler={onSelectedHandler} options={options} />
        );
    } else if (pathName === '/translate') {
        render = (
            <Translate />
        );
    } else {
        render = (
            <Accordion items={items} />
        );
    }

    return(
        <div>
            <Nav setPathName={ setPathName } />
            { render }
        </div>
    );
}

export default Widget;