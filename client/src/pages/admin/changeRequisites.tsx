import React, {useState} from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import MyInput from "../../components/UI/MyInput";
import {Button, Form} from "react-bootstrap";

const ChangeRequisites = () => {
    const [readonly, setReadonly] = useState(true);
    const [readonlyPlan, setReadonlyPlan] = useState(true);

    const [textChange, setTextChange] = useState('Изменить');
    const [textPlan, setTextPlan] = useState('Изменить');

    const changeReq = () => {
        setReadonly(!readonly);
        if (textChange === 'Изменить')
        {
            document.getElementById('req')?.focus();
            setTextChange('Сохранить');
        } else {
            document.getElementById('req')?.blur();
            setTextChange('Изменить');
        }
    }

    const changePlan = () => {
        setReadonlyPlan(!readonly);
        if (textPlan === 'Изменить')
        {
            document.getElementById('plan')?.focus();
            setTextPlan('Сохранить');
        } else {
            document.getElementById('plan')?.blur();
            setTextPlan('Изменить');
        }
    }

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <h4>Реквизиты:</h4>
            <div className='changeReq'>
                <MyInput placeholder='4276672391571507' readonly={readonly} id='req' type='number'/>
                <Button onClick={changeReq}>{textChange}</Button>
            </div>
            <h5>Плановая оплата</h5>
            <div className='choicePlanGroup'>
                <Form.Select >
                    <option>Для всех групп</option>
                    <option>609-91</option>
                    <option>609-92</option>
                </Form.Select>
                <MyInput type='number' placeholder='7000' readonly={readonlyPlan} id='plan'/>
                <Button onClick={changePlan}>{textPlan}</Button>
            </div>

        </div>
    );
};

export default ChangeRequisites;