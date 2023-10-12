import React, {useState} from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import MyInput from "../../components/UI/MyInput";
import {Button} from "react-bootstrap";

const ChangeRequisites = () => {
    const [readonly, setReadonly] = useState(true);

    const [textChange, setTextChange] = useState('Изменить');

    const changeReq = () => {
        setReadonly(!readonly);
        if (textChange === 'Изменить')
        {
            document.getElementsByTagName('input')[0].focus();
            setTextChange('Сохранить');
        } else {
            document.getElementsByTagName('input')[0].blur();
            setTextChange('Изменить');
        }

    }

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <h4>Реквизиты:</h4>
            <div className='changeReq'>
                <MyInput placeholder='4276672391571507' readonly={readonly}/>
                <Button onClick={changeReq}>{textChange}</Button>
            </div>
        </div>
    );
};

export default ChangeRequisites;