import React from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import {Button, Form, Table} from "react-bootstrap";
import InputDate from "../../components/UI/inputDate";
import BtnIcon from "../../components/UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import ClientPaymentTable from "../../components/tables/clientPaymentTable";

const AdminChildPaymentsInfo = () => {
    return (
        <div className="info">
            <ButtonBack path='/groups'/>
            <h2>Иванов Иван</h2>
            <div className='choice'>
                <div className='dates'>
                    <InputDate/> - <InputDate/>
                </div>
            </div>
            <ClientPaymentTable/>
        </div>
    );
};

export default AdminChildPaymentsInfo;