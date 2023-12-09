import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import MyInput from "../UI/MyInput";
import {createGroupApi} from "../../http/groupApi";

interface IProp {
    show: boolean,
    closeModal: () => void,
    openSchedule: () => void,
}

const NewGroupModal = ({show, closeModal, openSchedule} : IProp) => {
    const [name, setName] = useState('');

    const createGroup = async() => {
        const orgId = localStorage.getItem('currentOrg');
        // @ts-ignore
        const id = await createGroupApi(name, orgId);
        localStorage.setItem('currentGroup', id);
        closeModal();
        openSchedule();
    }
    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Создание группы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalNewGroup'>
                <MyInput placeholder='Название' value={name} onChange={setName}/>
                <Button onClick={createGroup}>Создать</Button>
            </Modal.Body>
        </Modal>
    );
};

export default NewGroupModal;