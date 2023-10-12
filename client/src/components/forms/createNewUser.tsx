import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

interface IProp {
    onClick?: () => void,
}

const CreateNewUser = ({onClick} : IProp) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const generateString = () => {
        return Math.random().toString(36).substring(2,18);
    }
    const generateLogin = () => {
        setLogin(generateString());
    }

    const generatePassword = () => {
        setPassword(generateString());
    }

    return (
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
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder={'Введите логин'} value={login}/>
                <Button onClick={generateLogin}>Сгенерировать логин</Button>
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="text" placeholder={'Введите пароль'} value={password}/>
                <Button onClick={generatePassword}>Сгенерировать пароль</Button>
            </Form.Group>
            <Button type="submit" className="mb-1" onClick={onClick}>
                Создать
            </Button>
        </Form>
    );
};

export default CreateNewUser;