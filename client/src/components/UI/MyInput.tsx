import React from 'react';
import '../../styles/inputDate.scss';

interface IProp {
    placeholder?: string,
    readonly?: boolean,
    name?: string,

    type?: string,
    id?: string,
    value?: string,
    onChange?: (e: any) => void,
}

const MyInput = ({placeholder, readonly, name, type, id, value, onChange} : IProp) => {
    return (
        <input placeholder={placeholder} readOnly={readonly}
               name={name} type={type} id={id} value={value} onChange={e => onChange ? onChange(e.target.value) : true}/>
    );
};

export default MyInput;