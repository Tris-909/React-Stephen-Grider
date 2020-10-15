import React, {useState} from 'react';

const DropDown = ({ options, selected, onSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    const renderOptions = options.map((option) => {
        return(
            <div className="item" key={option.value} onClick={() => onSelected(option)}> {option.label} </div>
        );
    });

    return(
        <div className={`ui selection dropdown ${isOpen ? `active visible` : null}`} onClick={() => setIsOpen(!isOpen)} >
            <input type="hidden" name="gender"/>
            <i className="dropdown icon"></i>
            <div className="default text">{ selected.label }</div>
            <div className={`menu ${isOpen ? `transition visible` : null}`}>
              {renderOptions}
            </div>
        </div>
    );
}

export default DropDown;