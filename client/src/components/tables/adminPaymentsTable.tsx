import React from 'react';
import {Table} from "react-bootstrap";

const AdminPaymentsTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Дата</th>
                <th>Сумма</th>
                <th>Баланс</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Иванов Иван</td>
                <td>09.09.2023</td>
                <td>10000р.</td>
                <td>10000р.</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default AdminPaymentsTable;