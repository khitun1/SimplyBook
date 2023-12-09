import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import MyInput from "../UI/MyInput";
import BtnBand from "../UI/btnBand";
import {setScheduleApi} from "../../http/groupApi";

interface IProp {
    show: boolean,
    closeModal: () => void,
    schedule: string[],
    setActive: (p) => void
}

const ScheduleModal = ({show, closeModal, schedule, setActive} : IProp) => {
    const rightOrder = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    // const [choiceSchedule, setChoiceSchedule] = useState('Выберите диапазон');
    // const [choiceTime, setChoiceTime] = useState('Выберите время');


    // const [actives1, setActives1] = useState<string[]>([]);
    // const [actives2, setActives2] = useState<string[]>([]);
    //
    // const [general, setGeneral] = useState('');

    // const times = {};

    // const setSchedule = async() => {
    //     let month = new Date().getMonth() + 2;
    //     if (month === 13) {
    //         month = 1;
    //     }
    //     const groupId: any = localStorage.getItem('currentGroup');
    //     if (general) {
    //         actives1.forEach(p => {
    //             times['1' + p] =  general;
    //         })
    //         if (choiceSchedule === '2')
    //             actives2.forEach(p => {
    //                 times['2' + p] =  general;
    //             })
    //         await setScheduleApi(groupId, times, month);
    //     }
    //     else {
    //         await setScheduleApi(groupId, times, month);
    //     }
    //     actives1.length = 0;
    //     actives2.length = 0;
    //     closeModal();
    // }

    const setSchedule = async() => {
            let month = new Date().getMonth() + 2;
            if (month === 13) {
                month = 1;
            }
        const groupId = localStorage.getItem('currentGroup');
        await setScheduleApi(groupId, schedule, month);
        closeModal();
    }

    const setArrAct = (active: string) => {
        if (schedule.indexOf(active) !== -1) {
            schedule = schedule.filter(p => p !== active)
        }
        else    {
            schedule.push(active);
            let arr = [];
            rightOrder.forEach(p => schedule.indexOf(p) !== -1 ? arr.push(p) : true);
            schedule = [...arr];
        }
        setActive(schedule);
    }

    // const setArrAct1 = (active: string) => {
    //     if (actives1.indexOf(active) !== -1) {
    //         setActives1(prevState => prevState.filter(p => p !== active));
    //     }
    //     else    {
    //         setActives1(prevState => [...prevState, active]);
    //         setActives1(prevState => {
    //             let arr: string[] = [];
    //             rightOrder.forEach(p => prevState.indexOf(p) !== -1 ? arr.push(p): true);
    //             return arr;
    //         })
    //     }
    // }

    // const setTimes = (num: number, day: string, time: string) => {
    //     times[num + day] = time;
    // }
    //
    // const setArrAct2 = (active: string) => {
    //     if (actives2.indexOf(active) !== -1) {
    //         setActives2(prevState => prevState.filter(p => p !== active));
    //     }
    //     else {
    //         setActives2(prevState => [...prevState, active]);
    //         setActives2(prevState => {
    //             let arr: string[] = [];
    //             rightOrder.forEach(p => prevState.indexOf(p) !== -1 ? arr.push(p): true);
    //             return arr;
    //         })
    //     }
    // }
    // const changeTime = (e: any) => {
    //     setChoiceTime(e.target.value);
    //     setGeneral('');
    // }


    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Настройка расписания
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalChangeGroup'>
                {/*<Form.Select aria-label="Default select example"*/}
                {/*             value={choiceSchedule}*/}
                {/*             onChange={e => setChoiceSchedule(e.target.value)}>*/}
                {/*    <option disabled selected>Выберите диапазон</option>*/}
                {/*    <option value="1" >Каждую неделю</option>*/}
                {/*    <option value="2">Через неделю</option>*/}
                {/*</Form.Select>*/}
                {/*<div className='choiceTime'>*/}
                {/*    <Form.Select value={choiceTime}*/}
                {/*                 onChange={changeTime}>*/}
                {/*        <option disabled selected>Выберите время</option>*/}
                {/*        <option value="1" >Одинаковое</option>*/}
                {/*        <option value="2">Разное</option>*/}
                {/*    </Form.Select>*/}
                {/*    {*/}
                {/*        choiceTime === '1' &&*/}
                {/*        <MyInput type='time' onChange={e => setGeneral(e)}/>*/}
                {/*    }*/}
                {/*</div>*/}
                {/*{*/}
                {/*    (choiceSchedule === '1' || choiceSchedule === '2')  && <div>*/}
                        {/*<label>1:</label>*/}
                        <BtnBand getActive={setArrAct} schedule={schedule}/>
                {/*        <ul>*/}
                {/*            {*/}
                {/*                choiceTime === '2' && actives1.map(p => <li>{p}*/}
                {/*                    <MyInput type='time' onChange={e => setTimes(1,p, e)}/>*/}
                {/*                </li>)*/}
                {/*            }*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*}*/}
                {/*{*/}
                {/*     choiceSchedule === '2' && <div>*/}
                {/*        <label>2:</label>*/}
                {/*        <BtnBand count={2} getActive={setArrAct2}/>*/}
                {/*        <ul>*/}
                {/*            {*/}
                {/*                choiceTime === '2' &&  actives2.map(p => <li>{p}*/}
                {/*                    <MyInput type='time' onChange={e => setTimes(2,p, e)}/>*/}
                {/*                </li>)*/}
                {/*            }*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*}*/}
                <Button onClick={setSchedule}>Настроить</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ScheduleModal;