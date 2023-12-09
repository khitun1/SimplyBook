import React, {useEffect, useState} from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import NewUserModal from "../../components/modals/newUserModal";
import {useActions} from "../../hooks/useActions";
import CreateChild from "../../components/forms/createChild";
import {getClientsApi, setPeriodApi} from "../../http/userApi";
import {getOrgsApi} from "../../http/orgApi";
import {setOrgs} from "../../store/actionCreators/orgCreator";
import {getGroupsApi} from "../../http/groupApi";


const AddChildPage = ({}) => {
    const {setUser, setClients, setGroups} = useActions();
    setUser();

    const [show, setShow] = useState(false);

    const getClients = async() => {
        const clients = await getClientsApi();
        setClients(clients);
        const groups = await getGroupsApi();
        setGroups(groups);
    }

    useEffect(() => {
        getClients();
    })

    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <h3>Добавление нового обучающегося</h3>
            <CreateChild openModal={() => setShow(true)}/>
            <NewUserModal show={show} closeModal={() => setShow(false)}/>
        </div>
    );
};

export default AddChildPage;