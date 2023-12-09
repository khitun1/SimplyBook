import React, {useState} from 'react';
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import "../styles/styleNavBar.scss";
import BtnIcon from "./UI/BtnIcon";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import exitIcon from "../icons/exitIcon.png";
import userIcon from "../icons/userIcon.png";
import {useNavigate} from "react-router-dom";



const NavBar = () => {
    const user = useTypedSelector(state => state.user);
    const splitName = user.name.split(' ');

    const surname = splitName[0];
    const name = splitName[1];
    const patron = splitName[2];

    const {changeChoice, exit} = useActions();

    const navigate = useNavigate();

    const signOut = () => {
        exit();
        navigate('/');
    }

    return (
        <div className='cl'>
            <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
                    <Navbar.Brand>Simply book</Navbar.Brand>
                {   user.role === 'Teacher' &&
                    <Nav className="me-auto" >
                        <Nav.Link href="/teacher">Посещения</Nav.Link>
                        <Nav.Link href="/teacherPayments">Оплаты</Nav.Link>
                    </Nav>
                }

                    {!user.role && <div className={'btns'}>
                        <Button variant="outline-success" onClick={() => changeChoice('login')}>Войти</Button>
                        <Button variant="outline-success"
                                onClick={() => changeChoice('signUp')}>Зарегистрироваться</Button>
                    </div>}
                {user.role &&
                    <div className="info">
                        <p>{surname + ' ' + name[0].toUpperCase() + '.' + patron[0].toUpperCase() + '.' }</p>
                        <BtnIcon img={userIcon}/>
                        <BtnIcon img={exitIcon} onClick={signOut}/>
                    </div>
}
            </Navbar>

        </div>
    );
};

export default NavBar;