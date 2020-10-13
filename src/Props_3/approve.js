import React from 'react';
import Comment from './comment';
import './approve.css';

const Aprrove = (props) => {

    return (
        <div className='approveCard'>
            <div className='approveCard__above'>
                <Comment name={props.name} content={props.content} />
            </div>
            <div className='approveCard__below'>
                <div style={{background: 'red', color: 'white'}}>Refuse</div>
                <div style={{background: 'green', color: 'white'}}>Approve</div>
            </div>
        </div>
    );

}

export default Aprrove;