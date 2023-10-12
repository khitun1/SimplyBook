import React, {useState} from 'react';
import {Button, Form, Modal, Table} from "react-bootstrap";
import MyInput from "../../components/UI/MyInput";
import '../../styles/groups.scss';
import ButtonBack from "../../components/UI/buttonBack";
import {useNavigate} from "react-router-dom";
import BtnIcon from "../../components/UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import BtnBand from "../../components/UI/btnBand";
import NewGroupModal from "../../components/modals/newGroupModal";
import ChildTransferModal from "../../components/modals/childTransferModal";
import ScheduleModal from "../../components/modals/scheduleModal";
import GroupsTable from "../../components/tables/groupsTable";

const GroupsPage = () => {
    const [showNewGroup, setShowNewGroup] = useState(false);
    const [transferShow, setTransferShow] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <div className='groupChoice'>
                <Form.Select aria-label="Default select example">
                    <option disabled selected>Выберите группу</option>
                    <option value="1">609-91</option>
                </Form.Select>
                <Button variant='secondary' onClick={() => setShowSchedule(true)}>Настроить расписание</Button>
                <Button variant='secondary' onClick={() => setShowNewGroup(true)}>Добавить новую группу</Button>
                <MyInput placeholder='Фамилия'/>
            </div>

            <NewGroupModal show={showNewGroup} closeModal={() => setShowNewGroup(false)}
                           openSchedule={() => setShowSchedule(true)}/>

            <ChildTransferModal show={transferShow} closeModal={() => setTransferShow(false)}/>

            <ScheduleModal show={showSchedule} closeModal={() => setShowSchedule(false)}/>

            <GroupsTable onClick={() => setTransferShow(true)}/>
        </div>
    );
};

export default GroupsPage;