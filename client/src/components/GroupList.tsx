import React from 'react';
import {Form} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getChildrenApi} from "../http/childrenApi";
import {useActions} from "../hooks/useActions";
import {getScheduleApi} from "../http/groupApi";

interface IProp {
    getSchedule?: (e) => string[],
}

const GroupList = ({getSchedule}: IProp) => {
    const {setChildren} = useActions();
    const groups = useTypedSelector(state => state.groups);

    const setCurrentGroup = async(name: string) => {
        const id = groups.find(p => p.name === name)._id;
        if (typeof id === "string") {
            localStorage.setItem('currentGroup', id);
        }
        const children = await getChildrenApi();
        setChildren(children);

        if (getSchedule) {
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();

            const schedule = await getScheduleApi(id, month, year);
            getSchedule(schedule);
        }
    }

    return (
            <Form.Select aria-label="Default select example"
                        onChange={e => setCurrentGroup(e.target.value)}>
                <option disabled selected>Выберите группу</option>
                {
                    groups.map(p =>
                        <option value={p.name}>
                            {p.name}
                        </option>)
                }

            </Form.Select>
    );
};

export default GroupList;