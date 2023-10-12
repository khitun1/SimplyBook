import React from 'react';
import BtnIcon from "./BtnIcon";
import back from '../../icons/BackIcon.png';
import {useNavigate} from "react-router-dom";
import '../../styles/btnBack.scss';

interface IProp {
    path: string,
}

const ButtonBack = ({path} : IProp) => {
    const navigate = useNavigate();
    return (
        <div style={{position: 'absolute', top: '65px', left: '10px'}}>
            <BtnIcon img={back} onClick={() => navigate(path)}/>
        </div>

    );
};

export default ButtonBack;