import React from 'react';
import '../../styles/inputDate.scss';

interface IProp {
    placeholder?: string,
    readonly?: boolean,
    name?: string,

    type?: string,
}

const MyInput = ({placeholder, readonly, name, type} : IProp) => {
    return (
        <input placeholder={placeholder} readOnly={readonly} name={name} type={type}/>
    );
};

export default MyInput;