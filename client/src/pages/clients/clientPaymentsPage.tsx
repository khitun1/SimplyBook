import React, {useEffect, useState} from 'react';
import {Alert, Button, Modal} from "react-bootstrap";
import "../../styles/ChildrenList.scss";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../../components/UI/buttonBack";
import BtnIcon from "../../components/UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import MyInput from "../../components/UI/MyInput";
import PayModal from "../../components/modals/payModal";
import {useActions} from "../../hooks/useActions";
import {getPaymentsForClientApi} from "../../http/paymentApi";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ClientPaymentsPage = () => {
    const {setUser, setPayments} = useActions();
    const children = useTypedSelector(state => state.children);
    const child = children.find(p => p._id === localStorage.getItem('currentChild'));
    const orgs = useTypedSelector(state => state.org);

    setUser();

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const getPayments = async() => {
        const childId = localStorage.getItem('currentChild');
        const payments = await getPaymentsForClientApi(childId);
        setPayments(payments);
        navigate('/clientPaymentsInfo')
    }

    const debt = child.balance;
    const next = 7000;
    const total = (next - debt) < 0? 0 : (next - debt);

    return (
        <div className="payments">
            <ButtonBack path='/client'/>
            <h2>{child.name}</h2>
            {
                orgs.map(p =>
                    <Alert key={'light'} variant={"dark"} className="section">
                        <h6>{p.name}</h6>
                        <Alert variant={'light'}>
                            <p>Баланс: { debt }р.</p>
                            <p>Необходимо оплатить за ноябрь: {next}р.</p>
                            <p>Итого: {total}p.</p>
                            <Button variant={"secondary"} onClick={() => setShow(true)}>Оплатить</Button>
                            <Button variant={"secondary"} onClick={getPayments}>Просмотреть информацию об оплатах</Button>
                            <Button variant={"secondary"} onClick={() => navigate('/clientInvoices')}>Просмотреть счета</Button>
                        </Alert>
                    </Alert>
                )
            }


            <PayModal show={show} closeModal={() => setShow(false)}/>

        </div>
    );
};

export default ClientPaymentsPage;