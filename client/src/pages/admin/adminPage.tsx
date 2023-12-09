import React, {useEffect} from 'react';
import {Button} from "react-bootstrap";
import '../../styles/admin.scss';
import {useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {getOrgsApi} from "../../http/orgApi";
import OrgList from "../../components/OrgList";
import {setPeriodApi} from "../../http/userApi";

const AdminPage = () => {
    const {setUser, setOrgs} = useActions();

    const navigate = useNavigate();

    setUser();

    const getOrgs = async() => {
        await setPeriodApi();
        const orgs = await getOrgsApi();
        setOrgs(orgs);
    }

    useEffect(() => {
        getOrgs();
    })

    return (
        <div className='main'>
            <Button className='add' onClick={() => navigate('/addSchool')}>Зарегистрировать новую организацию</Button>
            <OrgList/>
        </div>
    );
};

export default AdminPage;