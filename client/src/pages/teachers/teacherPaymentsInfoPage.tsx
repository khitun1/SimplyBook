import React from 'react';
import MyInput from "../../components/UI/MyInput";
import InputDate from "../../components/UI/inputDate";
import ClientPaymentTable from "../../components/tables/clientPaymentTable";
import '../../styles/teacher.scss';
import TeacherPaymentsTable from "../../components/tables/TeacherPaymentsTable";

const TeacherPaymentsInfoPage = () => {
    return (
        <div className='main'>
            <h3>Плавание</h3>
            <div className='choice'>
                <MyInput placeholder='Фамилия'/>
            </div>
            <TeacherPaymentsTable/>
        </div>
    );
};

export default TeacherPaymentsInfoPage;