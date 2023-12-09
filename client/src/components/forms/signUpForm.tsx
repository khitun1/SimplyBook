import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {signUpApi} from "../../http/userApi";
import {useActions} from "../../hooks/useActions";
import {useNavigate} from 'react-router-dom';

const SignUpForm = () => {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patron, setPatron] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useActions();

    let navigate = useNavigate();

    // @ts-ignore
    const signUp = async(e) => {
        e.preventDefault();
        const fullName = surname + ' ' + name + ' ' + patron;
        await signUpApi(fullName, login, password);
        setUser();
        navigate('/admin');
    }

    return (
        <Form className={'signUpForm'} onSubmit={signUp}>
            <h3>Регистрация</h3>
            <Form.Group className="mb-3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" placeholder="Введите фамилию"
                value={surname} onChange={e => setSurname(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя"
                value={name} onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Отчество</Form.Label>
                <Form.Control type="text" placeholder="Введите отчество"
                value={patron} onChange={e => setPatron(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLogin">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин"
                value={login} onChange={e => setLogin(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Пароль"
                value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button type="submit" className="mb-2">
                Зарегистрироваться
            </Button>
        </Form>
    );
};

export default SignUpForm;