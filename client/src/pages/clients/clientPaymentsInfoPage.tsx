import React from 'react';
import {Form, Table} from "react-bootstrap";
import '../../styles/paymentInfo.scss';
import InputDate from "../../components/UI/inputDate";
import ClientPaymentTable from "../../components/tables/clientPaymentTable";
import ButtonBack from "../../components/UI/buttonBack";

const ClientPaymentsInfoPage = () => {
    return (
        <div className="info">
            <ButtonBack path='/clientPayments'/>
            <h2>Иванов Иван</h2>
            <div className='choice'>
                <Form.Select aria-label="Default select example" className='section'>
                    <option>Выберите секцию</option>
                    <option value="1">Плавание</option>
                </Form.Select>
                <div className='dates'>
                    <InputDate/> - <InputDate/>
                </div>
            </div>
            <ClientPaymentTable/>
        </div>
    );
};

export default ClientPaymentsInfoPage;