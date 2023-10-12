import React from 'react';
import {Alert, Button} from "react-bootstrap";
import "../../styles/ChildrenList.scss";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../../components/UI/buttonBack";

const ClientsVisitsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="visits">
            <ButtonBack path='/client'/>
            <h2>Иванов Иван</h2>
            <Alert key={'light'} variant={"dark"} className="section">
                <h6>Плавание</h6>
                <Alert variant={'light'}>
                    <p>15.01.2023 - присутствовал</p>
                    <p>16.01.2023 - присутствовал</p>
                    <p>17.01.2023 - присутствовал</p>
                    <Button variant={"secondary"} onClick={() => navigate('/clientVisitsInfo')}>Просмотреть все посещения</Button>
                </Alert>
            </Alert>
        </div>
    );
};

export default ClientsVisitsPage;