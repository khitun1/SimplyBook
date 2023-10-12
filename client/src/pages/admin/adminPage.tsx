import React from 'react';
import {Alert, Button} from "react-bootstrap";
import '../../styles/admin.scss';
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();
    return (
        <div className='main'>
            <Button className='add' onClick={() => navigate('/addSchool')}>Зарегистрировать новую организацию</Button>
            <Alert className='school'>
                <h3>Плавание</h3>
                <div className='btns'>
                    <Button onClick={() => navigate('/groups')}>Группы</Button>
                    <Button onClick={() => navigate('/teachers')}>Преподаватели</Button>
                    <Button onClick={() => navigate('/addChild')}>Добавить обучающегося</Button>
                    <Button onClick={() => navigate('/adminPaymentsInfo')}>Информация об оплатах</Button>
                    <Button onClick={() => navigate('/changeRequisites')}>Настройки оплаты</Button>
                </div>
            </Alert>
        </div>
    );
};

export default AdminPage;