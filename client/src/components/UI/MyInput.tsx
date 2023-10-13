import React from 'react';
import '../../styles/inputDate.scss';

interface IProp {
    placeholder?: string,
    readonly?: boolean,
    name?: string,

    type?: string,
    id?: string
}

const MyInput = ({placeholder, readonly, name, type, id} : IProp) => {
    return (
        <input placeholder={placeholder} readOnly={readonly} name={name} type={type} id={id}/>
    );
};

export default MyInput;