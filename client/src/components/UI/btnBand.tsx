import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";

interface IProp {
    // count: number;
    getActive: (active: string) => void,

    schedule: string[],
}

const BtnBand = ({getActive, schedule} : IProp) => {
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];


    const setActive = (day: string) => {
        getActive(day);
        days?.map(p => {
            const item = document.getElementById(p);
            if (item.className.split(' ').indexOf('active') !== -1) {
                const index = item.className.split(' ').indexOf('active');
                const arr = item.className.split(' ');
                arr.splice(index, 1);
                item.className = arr.join(' ');
            }
        })
    }

    useEffect(() => {
        schedule?.map(p => {
            const item = document.getElementById(p);
            if (item) {
                if (item.className.split(' ').indexOf('active') !== -1) {
                    const index = item.className.split(' ').indexOf('active');
                    const arr = item.className.split(' ');
                    arr.splice(index, 1);
                    item.className = arr.join(' ');
                }
                else {
                    item.className += ' active';
                }
            }
        })
    })



    return (
        <div id='band'>
            {
                days?.map((day: string) =>
                    <Button variant='outline-secondary' id={day}
                            onClick={() => setActive(day)}>
                        {day}
                    </Button>
                )
            }
        </div>
    );
};

export default BtnBand;