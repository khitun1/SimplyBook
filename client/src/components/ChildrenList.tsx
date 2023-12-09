import React from 'react';
import {Alert, Button} from "react-bootstrap";
import "../styles/ChildrenList.scss";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {getOrgsForChildApi} from "../http/orgApi";
import {setChildren} from "../store/actionCreators/childrenCreator";


const ChildrenList = () => {
    const navigate = useNavigate();
    const {setOrgs} = useActions();

    const children = useTypedSelector(state => state.children);

    const getOrg = async(id: string) => {
        localStorage.setItem('currentChild', id);
        const orgs = await getOrgsForChildApi(id);
        await setOrgs(orgs);
    }

    const visits = (id: string) => {
        getOrg(id)
        navigate('/clientVisits');
    }

    const payments = (id: string) => {
        getOrg(id)
        navigate('/clientPayments');
    }

    return (
        <div className={'list'}>
            {
                children.map(p =>
                    <Alert key={'light'} variant={"primary"} className={"item"}>
                        <label>{p.name}</label>
                        <Button variant={"primary"} onClick={() => visits(p._id)}>Посещения</Button>
                        <Button variant={"primary"} onClick={() => payments(p._id)}>Оплаты</Button>
                </Alert>)
            }

        </div>
    );
};

export default ChildrenList;