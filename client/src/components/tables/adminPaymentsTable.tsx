import React from 'react';
import {Table} from "react-bootstrap";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import moment from "moment/moment";

interface IProp {
    start: string,
    end: string,
    search: string,
}

const AdminPaymentsTable = ({start, end, search} : IProp) => {
    const payments = useTypedSelector(state => state.payments)
        .filter(p => p.name?.indexOf(search) !== -1);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Дата</th>
                <th>Сумма</th>
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
                        <td>{p.name}</td>
                        <td>{p.date}</td>
                        <td>{p.sum}</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    );
};

export default AdminPaymentsTable;