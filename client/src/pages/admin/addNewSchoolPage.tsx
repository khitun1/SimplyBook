import React from 'react';
import {Alert, Button} from "react-bootstrap";
import MyInput from "../../components/UI/MyInput";
import '../../styles/admin.scss';
import ButtonBack from "../../components/UI/buttonBack";

const AddNewSchoolPage = () => {
    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Регистрация новой организации</h2>
            <Alert className='AddInfo'>
                <MyInput placeholder='Название'/>
                <textarea placeholder='Описание'/>
                <MyInput placeholder='Реквизит для оплаты'/>
                <Button>Зарегистрировать</Button>
            </Alert>
        </div>
    );
};

export default AddNewSchoolPage;