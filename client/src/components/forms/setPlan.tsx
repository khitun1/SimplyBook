import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import MyInput from "../UI/MyInput";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getPlanApi, setPlanApi} from "../../http/groupApi";

const SetPlan = () => {

    const [group, setGroup] = useState();
    const [readonlyPlan, setReadonlyPlan] = useState(true);
    const [textPlan, setTextPlan] = useState('Изменить');
    const [sum, setSum] = useState('');

    const groups = useTypedSelector(state => state.groups);

    const changePlan = async() => {
        setReadonlyPlan(!readonlyPlan);
        if (textPlan === 'Изменить')
        {
            document.getElementById('plan')?.focus();
            setTextPlan('Сохранить');
        } else {
            document.getElementById('plan')?.blur();
            setTextPlan('Изменить');
            let month = new Date().getMonth() + 2;
            if (month === 13) {
                month = 1;
            }
            const orgId = localStorage.getItem('currentOrg')
            await setPlanApi(month, sum, group, orgId);
        }
    }

    const getPlans = async(curGroup: string) => {
        let month = new Date().getMonth() + 2;
        if (month === 13) {
            month = 1;
        }
        const curPlan = await getPlanApi(month, curGroup);
        if (curPlan) {
            setSum(curPlan);
        }
        else {
            setSum('');
        }
    }

    return (
        <div>
            <h5>Плановая оплата</h5>
            <div className='choicePlanGroup'>
                <Form.Select value={group} onChange={e => {
                    getPlans(e.target.value);
                    setGroup(e.target.value)
                }}>
                    <option>Для всех групп</option>
                    {
                        groups.map(p =>
                            <option value={p._id}>
                                {p.name}
                            </option>)
                    }
                </Form.Select>
                <MyInput type='number'
                         placeholder='Введите плановую оплату'
                         readonly={readonlyPlan}
                         id='plan'
                        value={sum}
                        onChange={e => setSum(e)}/>
                <Button onClick={changePlan}>{textPlan}</Button>
            </div>
        </div>
    );
};

export default SetPlan;