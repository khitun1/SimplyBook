import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import CreateNewUser from "../forms/createNewUser";

interface IProp {
    show: boolean,
    closeModal: () => void,
}

const NewUserModal = ({show, closeModal} : IProp) => {

    const createUser = () => {
        closeModal();
    }

    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Создание нового пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalNewTeacher'>
                <CreateNewUser onClick={createUser} role={'Client'}/>
            </Modal.Body>
        </Modal>
    );
};

export default NewUserModal;