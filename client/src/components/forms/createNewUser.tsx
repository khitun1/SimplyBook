import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {createUserApi} from "../../http/userApi";

interface IProp {
    onClick?: () => void,
    role: string,
}

const CreateNewUser = ({onClick, role} : IProp) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patron, setPatron] = useState('');
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

    // @ts-ignore
    const create = async(e) => {
        e.preventDefault();
        const orgId = localStorage.getItem('currentOrg');
        const fullName = surname + ' ' + name + ' ' + patron;
        // @ts-ignore
        await createUserApi(fullName, login, password, role, orgId);
        if (onClick) {
            onClick();
        }
    }

    return (
        <Form onSubmit={create}>
            <Form.Group className="mb-1">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" placeholder="Введите фамилию"
                value={surname} onChange={e => setSurname(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя"
                value={name} onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Отчество</Form.Label>
                <Form.Control type="text" placeholder="Введите отчество"
                value={patron} onChange={e => setPatron(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder={'Введите логин'}
                              value={login} onChange={e => setLogin(e.target.value)}/>
                <Button onClick={generateLogin}>Сгенерировать логин</Button>
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="text" placeholder={'Введите пароль'}
                              value={password} onChange={e => setPassword(e.target.value)}/>
                <Button onClick={generatePassword}>Сгенерировать пароль</Button>
            </Form.Group>
            <Button type="submit" className="mb-1">
                Создать
            </Button>
        </Form>
    );
};

export default CreateNewUser;