import React, {ReactNode} from 'react';
import "../../styles/btnIcon.scss"
import {useActions} from "../../hooks/useActions";
import {Image} from "react-bootstrap";

interface IProp {
    img: string,
    onClick?: () => any,
}

const BtnIcon = ({img, onClick} : IProp) => {
    return (
        <div>
            <button className={"button"} onClick={onClick}>
                <Image src={img} className='icon'/>
            </button>
        </div>
    );
};

export default BtnIcon;