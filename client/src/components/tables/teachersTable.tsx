import {useState} from 'react';
import {Button, Table} from "react-bootstrap";
import '../../styles/teacher.scss';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TeacherTransferModal from "../modals/teacherTransferModal";
import {delTeacherApi, getTeachersApi} from "../../http/userApi";
import {useActions} from "../../hooks/useActions";


const TeachersTable = () => {
    const teachers = useTypedSelector(state => state.teachers);
    const [transferShow, setTransferShow] = useState(false);
    const [teacher, setTeacher] = useState({});
    const {setTeachers} = useActions();


    const changeGroups = (selectTeacher: object) => {
        setTeacher(selectTeacher);
        setTransferShow(true);
    }

    const del = async(id: string) => {
        const orgId = localStorage.getItem('currentOrg');
       await delTeacherApi(id, orgId);
        // @ts-ignore
        const teachers = await getTeachersApi(orgId);
        setTeachers(teachers);
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Группы</th>
                    <th>Доабавить или убрать группу</th>
                    <th>Ислючить</th>
                </tr>
                </thead>
                <tbody>
                {
                    teachers.map(p =>
                        <tr>
                            <td>{p.name}</td>
                            <td>
                                <ul>
                                    {p.groups.map(p => <li>{p.name}</li>)}
                                </ul>

                            </td>
                            <td>
                                <Button variant='secondary' onClick={() => changeGroups(p)}>
                                Изменить
                            </Button>
                            </td>
                            <td>
                                <Button variant='outline-danger' onClick={() => del(p._id)}>
                                    &#10006;
                                </Button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </Table>

            <TeacherTransferModal show={transferShow}
                                  closeModal={() => setTransferShow(false)}
                                  teacher={teacher}/>
        </div>

    );
};

export default TeachersTable;