import React, {useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import MyInput from "../../components/UI/MyInput";
import '../../styles/admin.scss';
import ButtonBack from "../../components/UI/buttonBack";
import {createOrgApi, getOrgsApi} from "../../http/orgApi";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";

const AddNewSchoolPage = () => {
    const {setUser} = useActions();

    setUser();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [requisites, setRequisites] = useState('');

    const {setOrgs} = useActions();

    const createOrg = async() => {
        await createOrgApi(name, description, requisites);
        const orgs = await getOrgsApi();
        setOrgs(orgs);
        navigate('/admin');
    }

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Регистрация новой организации</h2>
            <Alert className='AddInfo'>
                <MyInput placeholder='Название' value={name} onChange={e => setName(e)}/>
                <textarea placeholder='Описание' value={description}
                          onChange={e => setDescription(e.target.value)}/>
                <MyInput placeholder='Реквизит для оплаты' value={requisites}
                        onChange={e => setRequisites(e)}/>
                <Button onClick={createOrg}>Зарегистрировать</Button>
            </Alert>
        </div>
    );
};

export default AddNewSchoolPage;