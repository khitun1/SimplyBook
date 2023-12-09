import React, {useEffect, useState} from 'react';
import MyInput from "../../components/UI/MyInput";
import InputDate from "../../components/UI/inputDate";
import ClientPaymentTable from "../../components/tables/clientPaymentTable";
import '../../styles/teacher.scss';
import TeacherPaymentsTable from "../../components/tables/TeacherPaymentsTable";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getChildrenApi} from "../../http/childrenApi";

const TeacherPaymentsInfoPage = () => {
    const {setUser, setChildren} = useActions();

    setUser();

    const [search, setSearch] = useState('');

    const getChildren = async() => {
        const children = await getChildrenApi();
        setChildren(children);
    }


    useEffect(() => {
        getChildren();
    })

    return (
        <div className='main'>
            <h2>Информация о балансах</h2>
            <h3>Плавание</h3>
            <div className='choice'>
                <MyInput placeholder='Фамилия'
                        value={search}
                        onChange={e => setSearch(e)}/>
            </div>
            <TeacherPaymentsTable search={search}/>
        </div>
    );
};

export default TeacherPaymentsInfoPage;