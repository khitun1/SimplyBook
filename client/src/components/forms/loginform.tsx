import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useActions} from "../../hooks/useActions";
import {signInApi} from "../../http/userApi";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";

const Loginform = () => {
    const {setUser} = useActions();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // @ts-ignore
    const signIn = async(e) => {
        e.preventDefault();
        const path = await signInApi(login, password);
        setUser();
        // @ts-ignore
        navigate(path);

    }

    return (
            <Form className={'loginForm'} onSubmit={signIn}>
                <h3>Вход</h3>
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
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Запомнить меня"
                />
                <Button type="submit" className="mb-2">
                    Войти
                </Button>
            </Form>
    );
};

export default Loginform;