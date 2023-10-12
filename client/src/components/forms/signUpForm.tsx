import React from 'react';
import {Button, Form} from "react-bootstrap";

const SignUpForm = () => {
    return (
        <Form className={'signUpForm'}>
            <h3>Регистрация</h3>
            <Form.Group className="mb-3">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" placeholder="Введите фамилию"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="password" placeholder="Введите имя"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Отчество</Form.Label>
                <Form.Control type="text" placeholder="Введите отчество"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLogin">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Пароль"/>
            </Form.Group>
            <Button type="submit" className="mb-2">
                Зарегистрироваться
            </Button>
        </Form>
    );
};

export default SignUpForm;