import React from 'react';
import {Table} from "react-bootstrap";
import moment from "moment";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IProp {
    search: string,
}

const TeacherPaymentsTable = ({search}: IProp) => {

    const children = useTypedSelector(state => state.children);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Баланс на {
                    moment()
                        // .startOf('month')
                        .format('DD.MM.YYYY')
                }</th>
            </tr>
            </thead>
            <tbody>
            {
                children.filter(p => p.name.indexOf(search) !== -1).map(p =>
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.balance}</td>
                    </tr>)
            }
            </tbody>
        </Table>
    );
};

export default TeacherPaymentsTable;