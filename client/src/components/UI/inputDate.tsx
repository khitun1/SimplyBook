import React from 'react';
import '..//../styles/inputDate.scss';

interface IProp {
    value: string,
    onChange: (e) => void
}

const InputDate = ({value, onChange}: IProp) => {
    return (
        <input type='date' value={value}
                onChange={e => onChange(e.target.value)}/>
    );
};

export default InputDate;