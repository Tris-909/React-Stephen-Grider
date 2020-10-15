import React from 'react';

const Input = ({ input, setInput, onSubmitHandler }) => {

    const onChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        onSubmitHandler();
    }

    return(
        <div className='ui container' style={{marginTop: '20px', marginBottom: '20px'}}>
            <div className='ui segment'>
                <form className="ui form" onSubmit={(event) => onSubmit(event)}>
                    <div className="ui input">
                        <input type="text" value={input} placeholder="Add smth to translate" onChange={(event) => onChangeHandler(event)}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Input;