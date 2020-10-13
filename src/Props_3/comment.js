import React from 'react';
import './comment.css';

const Comment = ( props ) => {
    return (
        <div className='container'>
            <img alt='' className='container__image' src='https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'/>
            <div className='container__content'>
                <div className='container__content__above'>
                <h3>{props.name}</h3>
                    <div>{ Date() }</div>
                </div>
                <div className='container__content__below'> {props.content} </div>
            </div>
        </div>
    );
}

export default Comment;
