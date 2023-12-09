import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import MyInput from "../UI/MyInput";
import {payApi} from "../../http/paymentApi";
import moment from "moment";

interface IProp {
    show: boolean,
    closeModal: () => void,
}

const PayModal = ({show, closeModal} : IProp) => {

    const [sum, setSum] = useState();

    const pay = async() => {
        const date = moment().format('DD.MM.YYYY');
        const childId = localStorage.getItem('currentChild');
        await payApi(sum, childId, date);
        setSum(null);
        closeModal();

    }

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
                    <MyInput placeholder='Сумма, р.'
                             type='number'
                             value={sum}
                            onChange={e => setSum(e)}/>
                    <Button variant='outline-secondary' onClick={pay}>Оплатить</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default PayModal;