import React from 'react';
import {Table} from "react-bootstrap";
import moment from "moment";

interface IProp {
    payments: any[],
    start: string,
    end: string,
}

const ClientPaymentTable = ({payments, start, end} : IProp) => {

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
            {
                payments.filter(p => {
                    const date = moment(p.date, 'DD.MM.YYYY');
                    const firstDate = moment(start, 'YYYY-MM-DD');
                    const secondDate = moment(end, 'YYYY-MM-DD');
                    if (!start && !end) {
                        return true
                    }
                    else if (!start && end) {
                        return secondDate.diff(date) >= 0;
                    }
                    else if (start && !end) {
                        return date.diff(firstDate) >= 0;
                    }
                    return date.diff(firstDate) >= 0 && secondDate.diff(date) >= 0;
                }).map(p =>
                    <tr>
                        <td>{p.date}</td>
                        <td>{p.sum}</td>
                        <td>{p.status}</td>
                    </tr>)
            }
            </tbody>
        </Table>
    );
};

export default ClientPaymentTable;