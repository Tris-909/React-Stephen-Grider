import React, {useState} from 'react';
// import Accordion from './Accordion';
// import Search from './Search';
// import DropDown from './DropDown';
import Translate from './Translate';

// const items = [
//     {
//         title: 'What is React ?',
//         content: 'React is a front end library framework'
//     },
//     {
//         title: 'What is the date today ?',
//         content: '14/10/2020'
//     },
//     {
//         title: 'Are u tired ?',
//         content: 'Dont die'
//     }
// ];

// const Widget = () => {
//     return(
//         <div>
//             <Accordion items={items} />
//         </div>
//     )
// }

// const Widget = () => { 
//     return(
//         <Search />
//     );
// }

// const options = [
//     {
//         label: 'Red',
//         value: 'red'
//     }, 
//     {
//         label: 'Green',
//         value: 'green'
//     },
//     {
//         label: 'Blue',
//         value: 'blue'
//     }
// ];

// const Widget = () => {
//     const [selected, setSelected] = useState(options[0]);

//     const onSelectedHandler = (index) => {
//         setSelected(options[index]);
//     }

//     return(
//         <div>
//             <DropDown selected={selected} onSelectedHandler={onSelectedHandler} options={options} />
//         </div>
//     );
// }

const Widget = () => {
    return(
        <div>
            <Translate />
        </div>
    );
}

export default Widget;