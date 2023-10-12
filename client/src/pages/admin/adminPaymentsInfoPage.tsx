import React from 'react';
import AdminPaymentsTable from "../../components/tables/adminPaymentsTable";
import MyInput from "../../components/UI/MyInput";
import InputDate from "../../components/UI/inputDate";
import '../../styles/admin.scss';
import ButtonBack from "../../components/UI/buttonBack";

const AdminPaymentsInfoPage = () => {
    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <div className='adminPaymentsChoice'>
                <div className='dates'>
                    <InputDate/> - <InputDate/>
                </div>
                <MyInput placeholder='Фамилия'/>
            </div>
            <AdminPaymentsTable/>
        </div>
    );
};

export default AdminPaymentsInfoPage;