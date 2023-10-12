import React from 'react';
import {Alert, Button} from "react-bootstrap";
import "../styles/ChildrenList.scss";
import {useNavigate} from "react-router-dom";


const ChildrenList = () => {
    const navigate = useNavigate();

    return (
        <div className={'list'}>
            <Alert key={'light'} variant={"primary"} className={"item"}>
                <label>Иванов Иван</label>
                <Button variant={"primary"} onClick={() => navigate('/clientVisits')}>Посещения</Button>
                <Button variant={"primary"} onClick={() => navigate('/clientPayments')}>Оплаты</Button>
            </Alert>
        </div>
    );
};

export default ChildrenList;