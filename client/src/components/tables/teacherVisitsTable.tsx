import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import BtnIcon from "../UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import moment from 'moment';
import loginform from "../forms/loginform";
import {getScheduleApi} from "../../http/groupApi";
import {getScheduleForChildApi} from "../../http/childrenApi";


interface IProp {
    showModal: (p, s) => void;
    schedule: string[],
    shift: number,
    search: string,
}

const TeacherVisitsTable = ({showModal, schedule, shift, search} : IProp) => {
    const children = useTypedSelector(state => state.children)
        .filter(p => p.name.indexOf(search) !== -1);
    console.log(children)

    const rightOrder = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const scheduleDates = [];

    schedule?.forEach(p => {
        const index = rightOrder.indexOf(p) + 1;
        const date = moment().weekday(shift * 7 + index).format('DD.MM.YYYY');
        scheduleDates.push(date);
    });



    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                {
                    scheduleDates.map(p =>
                    <th>
                        {p}
                    </th>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {
                children.map(p =>
                    <tr>
                        <td>{p.name}</td>
                        {
                            scheduleDates.map(s => {
                                    if (p.visits.find(v => v.date === s)?.mark === 'присутствовал') {
                                        return <td>
                                            <Button variant='success' onClick={() => showModal(p._id, s)}>
                                                &#10004;
                                            </Button>
                                        </td>
                                    }
                                    else if (p.visits.find(v => v.date === s)?.mark === 'отсутствовал') {
                                        return <td>
                                            <Button variant='danger' onClick={() => showModal(p._id, s)}>
                                                &#10006;
                                            </Button>
                                        </td>
                                    }
                                    else if (p.visits.find(v => v.date === s)?.mark === 'опоздал') {
                                        return <td>
                                            <BtnIcon img={late} onClick={() => showModal(p._id, s)}/>
                                        </td>
                                    }

                                    else if (s === moment().format('DD.MM.YYYY'))    {
                                            return <td>
                                                <Button variant='outline-dark' onClick={() => showModal(p._id, s)}>
                                                    Отметить
                                                </Button>
                                            </td>
                                        }
                                    else {
                                        return <td></td>
                                    }
                            })
                        }
                        {/*/!*<td><BtnIcon img={late} onClick={showModal}/></td>*!/*/}

                        {/*<td></td>*/}
                        {/*<td></td>*/}
                        {/*<td></td>*/}
                    </tr>
                )
            }

            {/*<tr>*/}
            {/*    <td></td>*/}
            {/*    <td><Button variant='success' onClick={showModal}>&#10004;</Button></td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*    <td></td>*/}
            {/*    <td><Button variant='danger' onClick={showModal}>&#10006;</Button></td>*/}
            {/*</tr>*/}
            </tbody>
        </Table>
    );
};

export default TeacherVisitsTable;