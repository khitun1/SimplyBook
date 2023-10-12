import React, {useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";
import "../../styles/ChildrenList.scss";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../../components/UI/buttonBack";
import BtnIcon from "../../components/UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import MyInput from "../../components/UI/MyInput";
import PayModal from "../../components/modals/payModal";

const ClientPaymentsPage = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <div className="payments">
            <ButtonBack path='/client'/>
            <h2>Иванов Иван</h2>
            <Alert key={'light'} variant={"dark"} className="section">
                <h6>Плавание</h6>
                <Alert variant={'light'}>
                    <p>Задолженность: 7000р.</p>
                    <p>Необходимо оплатить за следующий месяц: 7000р.</p>
                    <p>Итого: 14000p.</p>
                    <Button variant={"secondary"} onClick={() => setShow(true)}>Оплатить</Button>
                    <Button variant={"secondary"} onClick={() => navigate('/clientPaymentsInfo')}>Просмотреть информацию об оплатах</Button>
                </Alert>
            </Alert>

            <PayModal show={show} closeModal={() => setShow(false)}/>

        </div>
    );
};

export default ClientPaymentsPage;