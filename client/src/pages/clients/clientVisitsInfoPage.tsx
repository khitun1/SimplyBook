import React from 'react';
import {Button, Form, Table} from "react-bootstrap";
import InputDate from "../../components/UI/inputDate";
import '../../styles/paymentInfo.scss';
import BtnIcon from "../../components/UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import ButtonBack from "../../components/UI/buttonBack";
import ClientVisitsTble from "../../components/tables/clientVisitsTble";

const ClientVisitsInfoPage = () => {
    return (
        <div className='info'>
            <ButtonBack path='/clientVisits'/>
            <h2>Иванов Иван</h2>
            <div className='choiceVisits'>
                <Form.Select aria-label="Default select example" className='section'>
                    <option>Выберите секцию</option>
                    <option value="1">Плавание</option>
                </Form.Select>
                <div className='dates'>
                    <InputDate/>
                </div>
                <div className='visitsInfo'>
                    <p>Всего занятий в месяце: 10</p>
                    <p>Присутствия: 4</p>
                    <p>Отсутствия: 2</p>
                    <p>Опоздания: 2</p>
                </div>
            </div>
            <div className='visitsTable'>
                <div className='changeRange'>
                    <button>&#60;</button>
                    <button>&#62;</button>
                </div>
            <ClientVisitsTble/>
            </div>
        </div>
    );
};

export default ClientVisitsInfoPage;