import React, {useState} from 'react';
import DropDown from './Translate_Dropdown';
import Input from './Translate_Input';
import axios from 'axios';

const options = [
    {
        label: 'Vietnamese',
        value: 'vi'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [selected, setSelected] = useState(options[0]);
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const onInputChangeHandler = (text) => {
        setInput(text);
    }

    const onSubmit = () => {
        const options = {
            method: 'POST',
            url: 'https://translation.googleapis.com/language/translate/v2',
            params: {
                "q": input,
                "target": selected.value,
                "key": "AIzaSyDyoPuPTBntRWs2UHpNS0dHLgln6Vu0jjk"
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.data.translations);
            setResult(response.data.data.translations[0].translatedText);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return(
        <div>
            <Input input={input} setInput={onInputChangeHandler} onSubmitHandler={onSubmit} />
            <DropDown options={options} selected={selected} onSelected={setSelected} />
            <h1> {result ? result : null} </h1>
        </div>
    );
}

export default Translate;