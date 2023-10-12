import React from 'react';
import {Table} from "react-bootstrap";

const TeacherPaymentsTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Остаток на 01.04.2023</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Иванов Иван</td>
                <td>10000р.</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default TeacherPaymentsTable;