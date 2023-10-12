import React from 'react';
import {Button, Table} from "react-bootstrap";
import BtnIcon from "../UI/BtnIcon";
import late from "../../icons/lateIcon.png";

interface IProp {
    showModal: () => void;
}

const TeacherVisitsTable = ({showModal} : IProp) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>09.01.2023</th>
                <th>10.01.2023</th>
                <th>11.01.2023</th>
                <th>12.01.2023</th>
                <th>13.01.2023</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Иванов Иван</td>
                <td><BtnIcon img={late} onClick={showModal}/></td>
                <td><Button variant='outline-dark' onClick={showModal}>Отметить</Button></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><Button variant='success' onClick={showModal}>&#10004;</Button></td>
            </tr>
            <tr>
                <td></td>
                <td><Button variant='danger' onClick={showModal}>&#10006;</Button></td>
            </tr>
            </tbody>
        </Table>
    );
};

export default TeacherVisitsTable;