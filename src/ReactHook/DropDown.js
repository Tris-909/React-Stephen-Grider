import React, {useState, useEffect, useRef} from 'react';

const DropDown = ({ options, selected, onSelectedHandler }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const renderOptions = options.map((option, index) => {
        if (selected.label !== option.label) {
            return (
                    <option key={option.value} onClick={() => onOptionsClickHandler(index)} className="item">
                        {option.label}
                    </option>
                );
        }
    })

    const ToggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const onOptionsClickHandler = (index) => {
        onSelectedHandler(index);
    }

    const dropDownOnClickHandler = () => {
        ToggleDropDown();
    }

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (!ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        });
    }, []);

    

    return(
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">
                    Select Color
                </label>
                <div onClick={() => dropDownOnClickHandler()} className={`ui selection dropdown ${isOpen ? 'visible active' : null}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${isOpen ? 'visible' : null} transition`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DropDown;