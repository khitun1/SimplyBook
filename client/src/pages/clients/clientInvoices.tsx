import React from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import {Form} from "react-bootstrap";
import InputDate from "../../components/UI/inputDate";
import ClientPaymentTable from "../../components/tables/clientPaymentTable";
import ClientInvoiceTable from "../../components/tables/clientInvoiceTable";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ClientInvoices = () => {
    const {setUser} = useActions();

    setUser();


    const children = useTypedSelector(state => state.children);
    const child = children.find(p => p._id === localStorage.getItem('currentChild'));

    return (
        <div className="info">
            <ButtonBack path='/clientPayments'/>
            <h2>{child.name}</h2>
            <h3>Выставленные счета</h3>
            <div className='choice'>
                <div className='dates'>
                    <InputDate/> - <InputDate/>
                </div>
            </div>
            <ClientInvoiceTable/>
        </div>
    );
};

export default ClientInvoices;