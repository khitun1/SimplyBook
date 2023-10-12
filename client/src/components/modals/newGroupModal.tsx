import React from 'react';
import {Button, Modal} from "react-bootstrap";
import MyInput from "../UI/MyInput";

interface IProp {
    show: boolean,
    closeModal: () => void,
    openSchedule: () => void,
}

const NewGroupModal = ({show, closeModal, openSchedule} : IProp) => {

    const createGroup = () => {
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
                <MyInput placeholder='Название'/>
                <Button onClick={createGroup}>Создать</Button>
            </Modal.Body>
        </Modal>
    );
};

export default NewGroupModal;