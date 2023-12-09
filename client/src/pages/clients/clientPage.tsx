import React, {useEffect} from 'react';
import ChildrenList from "../../components/ChildrenList";
import {useActions} from "../../hooks/useActions";
import {getChildrenForParentApi} from "../../http/childrenApi";

const ClientPage = () => {
    const {setUser, setChildren} = useActions();

    const getChildren = async() => {
        const children = await getChildrenForParentApi();
        setChildren(children);
    }

    useEffect(() => {
        getChildren();
    })

    setUser();

    return (
        <div>
            <ChildrenList/>
        </div>
    );
};

export default ClientPage;