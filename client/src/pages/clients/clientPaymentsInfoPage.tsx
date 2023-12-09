import React, {useState} from 'react';
import {Form, Table} from "react-bootstrap";
import '../../styles/paymentInfo.scss';
import InputDate from "../../components/UI/inputDate";
import ClientPaymentTable from "../../components/tables/clientPaymentTable";
import ButtonBack from "../../components/UI/buttonBack";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import moment from "moment";

const ClientPaymentsInfoPage = () => {
    const {setUser} = useActions();
    const payments = useTypedSelector(state => state.payments);


    const children = useTypedSelector(state => state.children);
    const child = children.find(p => p._id === localStorage.getItem('currentChild'));

    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    setUser();

    return (
        <div className="info">
            <ButtonBack path='/clientPayments'/>
            <h2>{child.name}</h2>
            <h3>Информация об оплатах</h3>
            <div className='choice'>
                <div className='dates'>
                    <InputDate
                        value={start}
                        onChange={e => setStart(e)}/>
                    -
                    <InputDate
                    value={end}
                    onChange={e => setEnd(e)}/>
                </div>
            </div>
            <ClientPaymentTable payments={payments} start={start} end={end}/>
        </div>
    );
};

export default ClientPaymentsInfoPage;