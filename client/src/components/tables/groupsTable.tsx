import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface IProp {
    onClick: () => void,
}

const GroupsTable = ({onClick} : IProp) => {
    const navigate = useNavigate();

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Дата рождения</th>
                <th>Задолженность</th>
                <th>Перевести в другую группу</th>
                <th>Оплаты</th>
                <th>Исключить</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Иванов Иван</td>
                <td>09.08.2010</td>
                <td>8000р.</td>
                <td><Button variant='secondary' onClick={onClick}>Перевести</Button></td>
                <td><Button variant='secondary' onClick={() => navigate('/childPayments')}>Просмотреть</Button></td>
                <td><Button variant='outline-danger'>&#10006;</Button></td>
            </tr>
            </tbody>
        </Table>
    );
};

export default GroupsTable;