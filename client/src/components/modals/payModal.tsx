import React from 'react';
import {Button, Modal} from "react-bootstrap";
import MyInput from "../UI/MyInput";

interface IProp {
    show: boolean,
    closeModal: () => void,
}

const PayModal = ({show, closeModal} : IProp) => {
    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Пополнение баланса
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='setPay'>
                    <MyInput placeholder='Cумма, р.' type='number'/>
                    <Button variant='outline-secondary'>Оплатить</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default PayModal;