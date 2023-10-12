import React, {useState} from 'react';
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import "../styles/styleNavBar.scss";
import BtnIcon from "./UI/BtnIcon";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import exitIcon from "../icons/exitIcon.png";
import userIcon from "../icons/userIcon.png";



const NavBar = () => {
    const user = useTypedSelector(state => state.user);
    const {changeChoice, exit} = useActions();

    return (
        <div className='cl'>
            <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link href="/teacher">Посещения</Nav.Link>
                        <Nav.Link href="/teacherPayments">Оплаты</Nav.Link>
                    </Nav>

                    {!user.role && <div className={'btns'}>
                        <Button variant="outline-success" onClick={() => changeChoice('login')}>Войти</Button>
                        <Button variant="outline-success"
                                onClick={() => changeChoice('signUp')}>Зарегистрироваться</Button>
                    </div>}
                {user.role &&
                    <div className="info">
                        <p>Баланс: 0</p>
                        <BtnIcon img={userIcon}/>
                        <BtnIcon img={exitIcon} onClick={exit}/>
                    </div>
}
            </Navbar>

        </div>
    );
};

export default NavBar;