import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import MyInput from "../../components/UI/MyInput";
import '../../styles/groups.scss';
import ButtonBack from "../../components/UI/buttonBack";
import NewGroupModal from "../../components/modals/newGroupModal";
import ChildTransferModal from "../../components/modals/childTransferModal";
import ScheduleModal from "../../components/modals/scheduleModal";
import GroupsTable from "../../components/tables/groupsTable";
import {useActions} from "../../hooks/useActions";
import {getGroupsApi, getScheduleApi} from "../../http/groupApi";
import GroupList from "../../components/GroupList";

const GroupsPage = () => {
    const {setUser, setGroups} = useActions();
    setUser();

    const getGroups = async() => {
        const groups = await getGroupsApi();
        console.log(groups)
        setGroups(groups);

    }

    useEffect(() => {
        getGroups();
    })


    const [showNewGroup, setShowNewGroup] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [schedule, setSchedule] = useState();

    const getSchedule = async() => {
        const groupId = localStorage.getItem('currentGroup');
        let month = new Date().getMonth() + 1;
        if (month === 13) {
            month = 1
        }
        let year = new Date().getFullYear();

        const Schedule = await getScheduleApi(groupId, month, year);

        setSchedule(Schedule);
        setShowSchedule(true);
    }

    const setActive = p => {
        // console.log(p);
        setSchedule(p);
    }

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <div className='groupChoice'>
                <GroupList getSchedule={e => setSchedule(e)}/>
                <Button variant='secondary' onClick={getSchedule}>Настроить расписание</Button>
                <Button variant='secondary' onClick={() => setShowNewGroup(true)}>Добавить новую группу</Button>
            </div>

            <NewGroupModal show={showNewGroup} closeModal={() => setShowNewGroup(false)}
                           openSchedule={() => setShowSchedule(true)}/>


            <ScheduleModal show={showSchedule}
                           closeModal={() => setShowSchedule(false)}
                           schedule={schedule}
                           setActive={setActive}/>

            <GroupsTable/>
        </div>
    );
};

export default GroupsPage;