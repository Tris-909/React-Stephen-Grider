import React, {useState} from 'react';

const Accordion = ({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const onClickHandler = (index) => {
        setSelectedIndex(index);
    }

    const renderItems = items.map((item, index) => {
        return(
            <React.Fragment key={item.title}>
                <div className={`title ${selectedIndex === index ? 'active' : null}`} onClick={() => onClickHandler(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${selectedIndex === index ? 'active' : null}`}>
                    {item.content}
                </div>
            </React.Fragment>
        );
    })
    
    return(
        <div className="ui styled accordion">
            {renderItems}
        </div>
    );
}

export default Accordion;