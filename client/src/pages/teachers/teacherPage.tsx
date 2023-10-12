import React, {useState} from 'react';
import {Button, Form, Table, Modal} from "react-bootstrap";
import '../../styles/teacher.scss';
import InputDate from "../../components/UI/inputDate";
import BtnIcon from "../../components/UI/BtnIcon";
import late from '../../icons/lateIcon.png';
import MyInput from "../../components/UI/MyInput";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SetVisitModal from "../../components/modals/setVisitModal";
import TeacherVisitsTable from "../../components/tables/teacherVisitsTable";


const TeacherPage = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='main'>
            <h3>Плавание</h3>
            <div className='choice'>
                <Form.Select aria-label="Default select example" className='section'>
                    <option disabled selected>Выберите секцию</option>
                    <option value="1">609-91</option>
                </Form.Select>
                <MyInput placeholder='Имя'/>
                <InputDate/>
            </div>
            <div className='changeRange'>
                <button>&#60;</button>
                <button>&#62;</button>
            </div>

            <SetVisitModal show={show} closeModal={() => setShow(false)}/>

            <TeacherVisitsTable showModal={() => setShow(true)}/>
        </div>
    );
};

export default TeacherPage;