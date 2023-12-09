import React from 'react';
import {Alert, Button} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";

const OrgList = () => {
    const organizations = useTypedSelector(state => state.org);

    const navigate = useNavigate();

    const click = (id: string, path: string) => {
        localStorage.setItem('currentOrg', id);
        navigate(path);
    }
    return (
        <div>
            {
                organizations.map(p => <Alert className='school'>
                        <h3>{p.name}</h3>
                        <div className='btns'>
                            <Button onClick={() => click(p._id, '/groups')}>Группы</Button>
                            <Button onClick={() => click(p._id, '/teachers')}>Преподаватели</Button>
                            <Button onClick={() => click(p._id, '/addChild')}>Добавить обучающегося</Button>
                            <Button onClick={() => click(p._id, '/adminPaymentsInfo')}>Информация об оплатах</Button>
                            <Button onClick={() => click(p._id, '/changeRequisites')}>Настройки оплаты</Button>
                        </div>
                    </Alert>
                )
            }
        </div>
    );
};

export default OrgList;