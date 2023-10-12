import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

interface IProp {
    show: boolean,
    closeModal: () => void,
    groups: string[],
}


const TeacherTransferModal = ({show, closeModal, groups} : IProp) => {
    const addGroup = () => {
        closeModal();
    }

    return (
        <Modal
            show={show}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Изменить список групп
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalChangeGroup'>
                <Form.Select aria-label="Default select example">
                    <option disabled selected>Выберите новую группу</option>
                    <option value="1">609-91</option>
                </Form.Select>
                <Button onClick={addGroup}>Добавить</Button>
                <ul>
                    {
                        groups.map(p => <div style={{display: 'flex', alignItems: 'center'}}>
                            <li style={{marginRight: '10px', height: 'fit-content'}}>
                                {p}
                            </li>
                            <Button variant='outline-danger'>
                                &#10006;
                            </Button>
                        </div>)
                    }
                </ul>
            </Modal.Body>
        </Modal>
    );
};

export default TeacherTransferModal;