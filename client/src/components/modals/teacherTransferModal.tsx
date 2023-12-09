import {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useActions} from "../../hooks/useActions";
import {changeGroupsApi, getGroupsApi, getTeacherGroups} from "../../http/groupApi";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getTeachersApi} from "../../http/userApi";

interface IProp {
    show: boolean,
    closeModal: () => void,
    teacher: object,
}


const TeacherTransferModal = ({show, closeModal, teacher} : IProp) => {
    const {setTeachers} = useActions();
    const [group, setGroup] = useState();

    const allGroups = useTypedSelector(state => state.groups);
    const addGroup = async() => {
        const groupId = allGroups.find(p => p.name === group)?._id;
        const orgId = localStorage.getItem('currentOrg');
        await changeGroupsApi(teacher._id, groupId, 'add');
        const teachers = await getTeachersApi(orgId);
        setTeachers(teachers);
        closeModal();
    }

    const delGroup = async(groupId: string) => {
        await changeGroupsApi(teacher._id, groupId, 'del');
        const orgId = localStorage.getItem('currentOrg');
        const teachers = await getTeachersApi(orgId);
        setTeachers(teachers);
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
                <Form.Select aria-label="Default select example"
                             onChange={e => setGroup(e.target.value)}>
                    <option disabled selected>Выберите новую группу</option>
                    {
                        allGroups.map(p =>
                            <option value={p.name}>
                                {p.name}
                            </option>)
                    }
                </Form.Select>
                <Button onClick={addGroup}>Добавить</Button>
                <ul>
                    {   teacher.groups &&
                        teacher.groups.map(p => <div style={{display: 'flex', alignItems: 'center'}}>
                            <li style={{marginRight: '10px', height: 'fit-content'}}>
                                {p.name}
                            </li>
                            <Button variant='outline-danger' onClick={() => delGroup(p._id)}>
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