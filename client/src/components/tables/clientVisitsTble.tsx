import React from 'react';
import {Table} from "react-bootstrap";
import BtnIcon from "../UI/BtnIcon";
import late from "../../icons/lateIcon.png";

const ClientVisitsTble = () => {
    return (
        <Table striped bordered hover >
            <thead>
            <tr>
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
                <td><BtnIcon img={late}/></td>
                <td><p className='visit yes'>&#10004;</p></td>
                <td><p className='visit no'>&#10006;</p></td></tr>

            </tbody>
        </Table>
    );
};

export default ClientVisitsTble;