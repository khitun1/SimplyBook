import React from 'react';
import {Button, Modal} from "react-bootstrap";
import BtnIcon from "../UI/BtnIcon";
import late from "../../icons/lateIcon.png";
import {getChildrenApi, setVisitApi} from "../../http/childrenApi";
import {useActions} from "../../hooks/useActions";

interface IProp {
    show: boolean,
    closeModal: () => void,
    id: string,
    date: string
}

const SetVisitModal = ({show, closeModal, id, date} : IProp) => {
    const {setChildren} = useActions();
    const setVisit = async(mark: string) => {
        await setVisitApi(mark, id, date);
        const children = await getChildrenApi();
        setChildren(children);
        closeModal();
    }

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
                    <Button variant='success' onClick={() => setVisit('присутствовал')}>&#10004;</Button>
                    <Button variant='danger' onClick={() => setVisit('отсутствовал')}>&#10006;</Button>
                    <BtnIcon img={late} onClick={() => setVisit('опоздал')}/>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SetVisitModal;