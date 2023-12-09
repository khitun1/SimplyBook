import React, {useState} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import InputDate from "../../components/UI/inputDate";
import '../../styles/paymentInfo.scss';
import BtnIcon from "../../components/UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import ButtonBack from "../../components/UI/buttonBack";
import ClientVisitsTble from "../../components/tables/clientVisitsTble";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import moment from "moment/moment";

const ClientVisitsInfoPage = () => {
    const {setUser} = useActions();

    const [date, setDate] = useState('');

    const [shift, setShift] = useState(0);

    const children = useTypedSelector(state => state.children);

    let total = 0;
    let was = 0;
    let not = 0;
    let late = 0;

    const child = children.find(p => p._id === localStorage.getItem('currentChild'));

    child.visits?.map(p => {
        let start, end;
        if (date === '') {
            start = moment().startOf('month');
            end = moment().endOf('month');
        }
        else {
            start = moment(date, 'YYYY-MM-DD').startOf('month');
            end = moment(date, 'YYYY-MM-DD').endOf('month');
        }
        const day = moment(p.date, 'DD.MM.YYYY');
        if (day.isBetween(start,end)) {
            total++;
            if (p.mark === 'присутствовал') {
                was++;
            }
            else if (p.mark === 'отсутствовал') {
                not++;
            }
            else {
                late++;
            }
        }
    })

    setUser();

    const changeDate = e => {
        setDate(e);
        const newWeek = moment(e, 'YYYY-MM-DD').startOf('isoWeek');
        const currWeek = moment().startOf('isoWeek');
        const diff = newWeek.diff(currWeek, 'weeks');
        setShift(diff);
    }




    return (
        <div className='info'>
            <ButtonBack path='/clientVisits'/>
            <h2>{child.name}</h2>
            <h3>Посещения</h3>
            <div className='choiceVisits'>
                {/*<Form.Select aria-label="Default select example" className='section'>*/}
                {/*    <option disabled selected>Выберите секцию</option>*/}
                {/*    {*/}
                {/*        orgs.map(p =>*/}
                {/*            <option>{p.name}</option>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</Form.Select>*/}
                <div className='dates'>
                    <InputDate value={date} onChange={changeDate}/>
                </div>
                <div className='visitsInfo'>
                    <p>Всего занятий в месяце: {total}</p>
                    <p>Присутствия: {was}</p>
                    <p>Отсутствия: {not}</p>
                    <p>Опоздания: {late}</p>
                </div>
            </div>
            <div className='visitsTable'>
                <div className='changeRange'>
                    <button onClick={() => setShift(prevState => prevState - 1)}>&#60;</button>
                    <button onClick={() => setShift(prevState => prevState + 1)}>&#62;</button>
                </div>
            <ClientVisitsTble shift={shift}/>
            </div>
        </div>
    );
};

export default ClientVisitsInfoPage;