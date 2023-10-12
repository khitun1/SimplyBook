import React from 'react';
import {Button, Modal} from "react-bootstrap";
import BtnIcon from "../UI/BtnIcon";
import late from "../../icons/lateIcon.png";

interface IProp {
    show: boolean,
    closeModal: () => void,
}

const SetVisitModal = ({show, closeModal} : IProp) => {
    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Иванов Иван
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='choiceVisit'>
                    <Button variant='success'>&#10004;</Button>
                    <Button variant='danger'>&#10006;</Button>
                    <BtnIcon img={late}/>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SetVisitModal;