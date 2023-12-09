import React, {useEffect} from 'react';
import {Alert, Button} from "react-bootstrap";
import "../../styles/ChildrenList.scss";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../../components/UI/buttonBack";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getScheduleForChildApi} from "../../http/childrenApi";

const ClientsVisitsPage = () => {
    const {setUser} = useActions();

    const children = useTypedSelector(state => state.children);
    const child = children.find(p => p._id === localStorage.getItem('currentChild'));


    const orgs = useTypedSelector(state => state.org);

    setUser();

    const getSchedule = async() => {
        const childId = localStorage.getItem('currentChild');
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const schedule = await getScheduleForChildApi(childId, month, year);
        localStorage.setItem('schedule', schedule);
    }

    useEffect(() => {
        getSchedule()
    })

    const navigate = useNavigate();
    return (
        <div className="visits">
            <ButtonBack path='/client'/>
            <h2>{child.name}</h2>
            {
                orgs.map(p =>
                    <Alert key={'light'} variant={"dark"} className="section">
                        <h6>{p.name}</h6>
                        <Alert variant={'light'}>
                            <p>{child.visits[0].date} - {child.visits[0].mark}</p>
                            <p>{child.visits[1].date} - {child.visits[1].mark}</p>
                            <p>{child.visits[2].date} - {child.visits[2].mark}</p>
                            <Button variant={"secondary"} onClick={() => navigate('/clientVisitsInfo')}>Просмотреть все посещения</Button>
                        </Alert>
                    </Alert>
                )
            }

        </div>
    );
};

export default ClientsVisitsPage;