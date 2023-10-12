import React, {useState} from 'react';
import {Alert, Button, Form, Modal} from "react-bootstrap";
import MyInput from "../../components/UI/MyInput";
import InputDate from "../../components/UI/inputDate";
import ButtonBack from "../../components/UI/buttonBack";
import CreateNewUser from "../../components/forms/createNewUser";
import NewUserModal from "../../components/modals/newUserModal";

const AddChildPage = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <Alert className='addChild'>
                <Form>
                    <Form.Group className="mb-1">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Введите фамилию"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Введите имя"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control type="text" placeholder="Введите отчество"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>Дата рождения</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>Родитель</Form.Label>
                        <Form.Select aria-label="Default select example" className='section mb-3'>
                            <option disabled selected>Выберите родителя</option>
                            <option value="1">Иванов М.М</option>
                        </Form.Select>
                        <Button onClick={() => setShow(true)}>Создать нового пользователя</Button>
                    </Form.Group>
                    <Button type="submit" className="mt-3 w-100" >
                        Создать
                    </Button>
                </Form>
            </Alert>
            <NewUserModal show={show} closeModal={() => setShow(false)}/>

        </div>
    );
};

export default AddChildPage;