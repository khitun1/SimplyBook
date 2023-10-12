import React, {useState} from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import MyInput from "../../components/UI/MyInput";
import {Button} from "react-bootstrap";
import TeachersTable from "../../components/tables/teachersTable";
import NewTeacherModal from "../../components/modals/newTeacherModal";
import TeacherTransferModal from "../../components/modals/teacherTransferModal";

const AllTeachers = () => {
    const [showNewTeacher, setShowNewTeacher] = useState(false);
    const [transferShow, setTransferShow] = useState(false);

    const [groups] = useState<string []>(['609-91', '451', '111']);


    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <div className='choice'>
                <MyInput placeholder='Фамилия'/>
                <Button variant='secondary' onClick={() => setShowNewTeacher(true)}>Добавить нового преподавателя</Button>
            </div>

            <NewTeacherModal show={showNewTeacher} closeModal={() => setShowNewTeacher(false)}/>

            <TeacherTransferModal show={transferShow}
                                  closeModal={() => setTransferShow(false)}
                                    groups={groups}/>

            <TeachersTable onClick={() => setTransferShow(true)} groups={groups}/>
        </div>
    );
};

export default AllTeachers;