import React from 'react';
import Accordion from './Accordion';

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

const Widget = () => {
    return(
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default Widget;