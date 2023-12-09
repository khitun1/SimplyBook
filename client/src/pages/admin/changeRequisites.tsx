import React, {useEffect, useState} from 'react';
import ButtonBack from "../../components/UI/buttonBack";
import MyInput from "../../components/UI/MyInput";
import {Button, Form} from "react-bootstrap";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {changeReqApi} from "../../http/orgApi";
import SetPlan from "../../components/forms/setPlan";
import {getGroupsApi} from "../../http/groupApi";

const ChangeRequisites = () => {
    const {setUser} = useActions();

    setUser();

    const orgs = useTypedSelector(state => state.org);

    const org = orgs.find(p => p._id === localStorage.getItem('currentOrg'));

    const [req, setReq] = useState(org.requisites);

    const {setGroups} = useActions();

    const getGroups = async() => {
        const groups = await getGroupsApi();
        setGroups(groups);

    }

    useEffect(() => {
        getGroups();
    })



    const [readonly, setReadonly] = useState(true);


    const [textChange, setTextChange] = useState('Изменить');


    const changeReq = async() => {
        setReadonly(!readonly);
        if (textChange === 'Изменить')
        {
            document.getElementById('req')?.focus();
            setTextChange('Сохранить');
        } else {
            document.getElementById('req')?.blur();
            setTextChange('Изменить');
            const id = localStorage.getItem('currentOrg');
            await changeReqApi(id, req);
        }
    }




    return (
        <div className='main'>
            <ButtonBack path='/admin'/>
            <h2>Плавание</h2>
            <h4>Реквизиты:</h4>
            <div className='changeReq'>
                <MyInput placeholder='Введите реквизиты' readonly={readonly}
                         id='req'
                         type='number'
                        value={req}
                         onChange={e => setReq(e)}
                        />
                <Button onClick={changeReq}>{textChange}</Button>
            </div>
            <SetPlan/>
        </div>
    );
};

export default ChangeRequisites;