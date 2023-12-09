import React, {useEffect, useState} from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import MyInput from "../../components/UI/MyInput";
import {Button} from "react-bootstrap";
import TeachersTable from "../../components/tables/teachersTable";
import NewTeacherModal from "../../components/modals/newTeacherModal";
import TeacherTransferModal from "../../components/modals/teacherTransferModal";
import {useActions} from "../../hooks/useActions";
import {getTeachersApi} from "../../http/userApi";
import {getGroupsApi} from "../../http/groupApi";

const AllTeachers = () => {
    const {setUser, setGroups} = useActions();

    setUser();

    const {setTeachers} = useActions();

    const [showNewTeacher, setShowNewTeacher] = useState(false);


    const getTeachersAndGroups = async() => {
        const orgId = localStorage.getItem('currentOrg');
        // @ts-ignore
        const teachers = await getTeachersApi(orgId);
        setTeachers(teachers);
        const groups = await getGroupsApi();
        setGroups(groups);
    }

    useEffect(() => {
        getTeachersAndGroups();
    })




    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <h3>Преподаватели</h3>
            <div className='choice'>
                <MyInput placeholder='Фамилия'/>
                <Button variant='secondary' onClick={() => setShowNewTeacher(true)}>Добавить нового преподавателя</Button>
            </div>

            <NewTeacherModal show={showNewTeacher} closeModal={() => setShowNewTeacher(false)}/>

            <TeachersTable/>
        </div>
    );
};

export default AllTeachers;