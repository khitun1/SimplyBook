import React from 'react';
import {Table} from "react-bootstrap";

const ClientPaymentTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Дата</th>
                <th>Сумма</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>09.09.2023</td>
                <td>10000р.</td>
                <td>Проведен</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default ClientPaymentTable;