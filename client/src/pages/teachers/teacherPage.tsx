import React, {useEffect, useState} from 'react';
import '../../styles/teacher.scss';
import InputDate from "../../components/UI/inputDate";
import MyInput from "../../components/UI/MyInput";
import SetVisitModal from "../../components/modals/setVisitModal";
import TeacherVisitsTable from "../../components/tables/teacherVisitsTable";
import {useActions} from "../../hooks/useActions";
import {getGroupsForTeacherApi} from "../../http/groupApi";
import GroupList from "../../components/GroupList";
import moment from "moment";


const TeacherPage = () => {
    const {setUser, setGroups} = useActions();

    const [visitId, setVisitId] = useState('');
    const [visitDate, setVisitDate] = useState('');

    setUser();

    const [shift, setShift] = useState(0);

    const [show, setShow] = useState(false);
    const [schedule, setSchedule] = useState();

    const [date, setDate] = useState('');

    const getGroups = async() => {
        const groups = await getGroupsForTeacherApi();
        setGroups(groups);
    }

    const [search, setSearch] = useState('');

    useEffect(() => {
        getGroups();
    })

    const changeDate = e => {
        setDate(e);
        const newWeek = moment(e, 'YYYY-MM-DD').startOf('isoWeek');
        const currWeek = moment().startOf('isoWeek');
        const diff = newWeek.diff(currWeek, 'weeks');
        setShift(diff);
    }

    const prev = () => {
        setShift(prevState => prevState - 1);
    }

    const next = () => {
        setShift(prevState => prevState + 1)
    }

    const setVisit = (id: string, date: string) => {
        setVisitId(id);
        setVisitDate(date);
        setShow(true);
    }

    return (
        <div className='main'>
            <h2>Посещения</h2>
            <h3>Плавание</h3>
            <div className='choice choiceGroup'>
                <GroupList getSchedule={e => setSchedule(e)}/>
                <MyInput placeholder='Имя' value={search}  onChange={e => setSearch(e)}/>
                <InputDate value={date}
                            onChange={changeDate}/>
            </div>
            {
                schedule?.length > 0 &&
                <div className='changeRange'>
                    <button onClick={prev}>&#60;</button>
                    <button onClick={next}>&#62;</button>
                </div>
            }


            <SetVisitModal show={show}
                           closeModal={() => setShow(false)}
                           id={visitId}
                           date={visitDate}
            />

            {   schedule?.length > 0 &&
                <TeacherVisitsTable showModal={setVisit}
                                    schedule={schedule}
                                    shift={shift}
                                    search={search}/>
            }
        </div>
    );
};

export default TeacherPage;