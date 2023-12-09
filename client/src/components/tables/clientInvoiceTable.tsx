import React from 'react';
import {Table} from "react-bootstrap";

const ClientInvoiceTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Дата</th>
                <th>Сумма</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>01.12.2023</td>
                <td>7000р.</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default ClientInvoiceTable;