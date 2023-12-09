import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import GroupList from "../GroupList";
import {changeGroupForChildApi} from "../../http/childrenApi";

interface IProp {
    show: boolean,
    closeModal: () => void,
}


const ChildTransferModal = ({show, closeModal} : IProp) => {

    const changeGroup = async() => {
        await changeGroupForChildApi();
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
                <GroupList/>
                <Button onClick={changeGroup}>Перевести</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ChildTransferModal;