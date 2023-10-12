import React from 'react';
import {Button, Form} from "react-bootstrap";
import "../styles/SignForms.scss"
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Loginform from "../components/forms/loginform";
import SignUpForm from "../components/forms/signUpForm";

const StartPage = () => {
    const firstChoice = useTypedSelector(state => state.firstChoice);


    return (
        <div className={'startPage'}>
            {firstChoice.choice === 'login' &&  <Loginform/>}
            {firstChoice.choice === 'signUp' && <SignUpForm/>}
        </div>
    );
};

export default StartPage;