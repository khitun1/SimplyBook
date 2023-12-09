import React, {useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MyInput from "../UI/MyInput";
import {delChildApi, getChildrenApi} from "../../http/childrenApi";
import {useActions} from "../../hooks/useActions";
import ChildTransferModal from "../modals/childTransferModal";

interface IProp {
    onClick?: () => void,
}

const GroupsTable = ({onClick} : IProp) => {
    const navigate = useNavigate();
    const {setChildren} = useActions();
    const [transferShow, setTransferShow] = useState(false);

    const [search, setSearch] = useState('');

    const children = useTypedSelector(state => state.children).filter(p => p.name.indexOf(search) !== -1);

    const delChild = async(id: string) => {
        await delChildApi(id);
        const children = await getChildrenApi();
        setChildren(children);
    }

    const changeGroup = (id: string) => {
        localStorage.setItem('currentChild', id);
        setTransferShow(true);
    }


    return (
        <div>
            <MyInput placeholder='Фамилия' value={search} onChange={e => setSearch(e)}/>
            <Table striped bordered hover className={'childrenTable'}>
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
                {
                    children.map(p =>
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.birthday}</td>
                            <td>{p.balance}р.</td>
                            <td>
                                <Button variant='secondary' onClick={() => changeGroup(p._id)}>
                                    Перевести
                                </Button>
                            </td>
                            <td>
                                <Button variant='secondary' onClick={() => navigate('/childPayments')}>
                                Просмотреть
                                </Button>
                            </td>
                            <td>
                                <Button variant='outline-danger' onClick={() => delChild(p._id)}>
                                    &#10006;
                                </Button>
                            </td>
                        </tr>
                    )
                }

                </tbody>
            </Table>

            <ChildTransferModal show={transferShow}
                                closeModal={() => setTransferShow(false)}/>
        </div>

    );
};

export default GroupsTable;