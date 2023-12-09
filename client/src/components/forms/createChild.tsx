import React, {useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import {createChildApi} from "../../http/childrenApi";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";

interface IProp {
    openModal: () => void,
}

const CreateChild = ({openModal}: IProp) => {
    const clients = useTypedSelector(state => state.clients);
    const groups = useTypedSelector(state => state.groups);

    const navigate = useNavigate();

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patron, setPatron] = useState('');
    const [birthday, setBirthday] = useState('');

    const [group, setGroup] = useState('Выберите группу');
    const [parent, setParent] = useState('Выберите родителя');


    const createChild = async(e:any) => {
        e.preventDefault();
        const fullName = surname + ' ' + name + ' ' + patron;
        await createChildApi(fullName, birthday, group, parent);
        navigate('/admin');
    }
    return (
        <Alert className='addChild'>
            <Form onSubmit={createChild}>
                <Form.Group className="mb-1">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" placeholder="Введите фамилию"
                                  value={surname} onChange={e => setSurname(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" placeholder="Введите имя"
                                  value={name} onChange={e => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control type="text" placeholder="Введите отчество"
                                  value={patron} onChange={e => setPatron(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Дата рождения</Form.Label>
                    <Form.Control type="date"
                                  value={birthday} onChange={e => setBirthday(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Группа</Form.Label>
                    <Form.Select aria-label="Default select example" className='section mb-3'
                                 value={group} onChange={e => setGroup(e.target.value)}>
                        <option disabled selected>Выберите группу</option>
                        {
                            groups.map(p =>
                                <option value={p._id}>
                                    {p.name}
                                </option> )
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Родитель</Form.Label>
                    <Form.Select aria-label="Default select example" className='section mb-3'
                                 value={parent} onChange={e => setParent(e.target.value)}>
                        <option disabled selected>Выберите родителя</option>
                        {
                            clients.map(p =>
                            <option value={p._id}>
                                {p.name}
                            </option> )
                        }
                    </Form.Select>
                    <Button onClick={openModal}>Создать нового пользователя</Button>
                </Form.Group>
                <Button type="submit" className="mt-3 w-100" >
                    Создать
                </Button>
            </Form>
        </Alert>
    );
};

export default CreateChild;