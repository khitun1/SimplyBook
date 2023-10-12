import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useActions} from "../../hooks/useActions";

const Loginform = () => {
    const {setUser} = useActions();
    return (
            <Form className={'loginForm'}>
                <h3>Вход</h3>
                <Form.Group className="mb-3" controlId="formGroupLogin">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control type="text" placeholder="Введите логин"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль"/>
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Запомнить меня"
                />
                <Button type="submit" className="mb-2" onClick={() => setUser()}>
                    Войти
                </Button>
            </Form>
    );
};

export default Loginform;