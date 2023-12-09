import React from 'react';
import {Button, Table} from "react-bootstrap";
import BtnIcon from "../UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import moment from "moment";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IProp {
    shift: number,
}

const ClientVisitsTble = ({shift} : IProp) => {

    const schedule = localStorage.getItem('schedule')?.split(',');
    const scheduleDates = [];

    const rightOrder = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const children = useTypedSelector(state => state.children);

    const child = children.find(p => p._id === localStorage.getItem('currentChild'));

    schedule?.forEach(p => {
        const index = rightOrder.indexOf(p) + 1;
        const date = moment().weekday(shift * 7 + index).format('DD.MM.YYYY');
        scheduleDates.push(date);
    });

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
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
            <tr>
            {
                scheduleDates.map(s => {
                    if (child.visits.find(v => v.date === s)?.mark === 'присутствовал') {
                        return <td>
                            <p className='visit yes'>
                                &#10004;
                            </p>
                        </td>
                    }
                    else if (child.visits.find(v => v.date === s)?.mark === 'отсутствовал') {
                        return <td>
                            <p className='visit no'>
                                &#10006;
                            </p>
                        </td>
                    }
                    else if (child.visits.find(v => v.date === s)?.mark === 'опоздал') {
                        return <td>
                            <BtnIcon img={late}/>
                        </td>
                    }
                    else {
                        return <td></td>
                    }
                })
            }
            </tr>
            </tbody>
        </Table>
    );
};

export default ClientVisitsTble;