import React from 'react';
import {Modal} from "react-bootstrap";
import CreateNewUser from "../forms/createNewUser";

interface IProp {
    show: boolean,
    closeModal: () => void,
}


const NewTeacherModal = ({show, closeModal}: IProp) => {
    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Добавить преподавателя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalNewTeacher'>
                <CreateNewUser/>
            </Modal.Body>
        </Modal>
    );
};

export default NewTeacherModal;