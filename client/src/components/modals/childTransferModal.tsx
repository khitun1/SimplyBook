import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

interface IProp {
    show: boolean,
    closeModal: () => void,
}


const ChildTransferModal = ({show, closeModal} : IProp) => {
    const changeGroup = () => {
        closeModal();
    }

    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Перевод в другую группу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalChangeGroup'>
                <Form.Select aria-label="Default select example">
                    <option disabled selected>Выберите новую группу</option>
                    <option value="1">609-91</option>
                </Form.Select>
                <Button onClick={changeGroup}>Перевести</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ChildTransferModal;