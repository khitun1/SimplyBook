import React from 'react';
import {Button, Table} from "react-bootstrap";
import '../../styles/teacher.scss';

interface IProp {
    onClick?: () => void,
    groups: string[],
}

const TeachersTable = ({onClick, groups} : IProp) => {
    let list = '';
    groups.forEach((p, index) => {
        if (index !== groups.length - 1) {
            list += p + ', ';
        }
        else {
            list += p;
        }
    })

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Группы</th>
                <th>Доабавить или убрать группу</th>
                <th>Ислючить</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Иванов Иван</td>
                <td>
                        {list}
                </td>
                <td><Button variant='secondary' onClick={onClick}>Изменить</Button></td>
                <td><Button variant='outline-danger'>&#10006;</Button></td>
            </tr>
            </tbody>
        </Table>
    );
};

export default TeachersTable;