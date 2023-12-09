import React, {useEffect, useState} from 'react';
import AdminPaymentsTable from "../../components/tables/adminPaymentsTable";
import MyInput from "../../components/UI/MyInput";
import InputDate from "../../components/UI/inputDate";
import '../../styles/admin.scss';
import ButtonBack from "../../components/UI/buttonBack";
import {useActions} from "../../hooks/useActions";
import {getPaymentsForAdminApi, getPaymentsForClientApi} from "../../http/paymentApi";

const AdminPaymentsInfoPage = () => {
    const {setUser, setPayments} = useActions();

    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [search, setSearch] = useState('');

    setUser();

    const getPayments = async() => {
        const orgId = localStorage.getItem('currentOrg')
        const payments = await getPaymentsForAdminApi(orgId);
        setPayments(payments);
    }

    useEffect(() => {
        getPayments();
    })

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <h3>Информация об оплатах</h3>
            <div className='adminPaymentsChoice'>
                <div className='dates'>
                    <InputDate
                        value={start}
                        onChange={e => setStart(e)}
                    />
                    -
                    <InputDate
                        value={end}
                        onChange={e => setEnd(e)}
                    />
                </div>
                <MyInput placeholder='Фамилия' value={search} onChange={e => setSearch(e)}/>
            </div>
            <AdminPaymentsTable start={start} end={end} search={search}/>
        </div>
    );
};

export default AdminPaymentsInfoPage;