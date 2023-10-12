import React, {useState} from 'react';
import {Button} from "react-bootstrap";

interface IProp {
    count: number;
    getActive: (active: string) => void,
}

const BtnBand = ({count, getActive} : IProp) => {
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const setActive = (day: string) => {
        const item = document.getElementById(day);
        const name = day[1] + day[2];
        if (item) {
            if (item.className.split(' ').indexOf(day) !== -1) {
                const index = item.className.split(' ').indexOf('active');
                const arr = item.className.split(' ');
                arr.splice(index, 1);
                item.className = arr.join(' ');
            }
            else {
                item.className += ' active';
            }
            getActive(name);
        }
    }

    return (
        <div id='band'>
            {
                days.map((day: string) =>
                    <Button variant='outline-secondary' id={count + day} onClick={() => setActive(count + day)}>{day}</Button>
                )
            }
        </div>
    );
};

export default BtnBand;