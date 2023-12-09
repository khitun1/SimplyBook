import React from 'react';

import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import StartPage from "./pages/StartPage";
import ChildrenList from "./components/ChildrenList";
import ClientPage from "./pages/clients/clientPage";
import ClientsVisitsPage from "./pages/clients/clientsVisitsPage";
import ClientPaymentsPage from "./pages/clients/clientPaymentsPage";
import ClientPaymentsInfoPage from "./pages/clients/clientPaymentsInfoPage";
import TeacherPage from "./pages/teachers/teacherPage";
import TeacherPaymentsInfoPage from "./pages/teachers/teacherPaymentsInfoPage";
import ClientVisitsInfoPage from "./pages/clients/clientVisitsInfoPage";
import AdminPage from "./pages/admin/adminPage";
import AddNewSchoolPage from "./pages/admin/addNewSchoolPage";
import GroupsPage from "./pages/admin/groupsPage";
import AdminPaymentsInfoPage from "./pages/admin/adminPaymentsInfoPage";
import AddChildPage from "./pages/admin/addChildPage";
import AdminChildPaymentsInfo from "./pages/admin/adminChildPaymentsInfo";
import ChangeRequisites from "./pages/admin/changeRequisites";
import AllTeachers from "./pages/admin/allTeachers";
import ClientInvoices from "./pages/clients/clientInvoices";



function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes>
          <Route path='/' element={<StartPage/>}/>
          <Route path='/client' element={<ClientPage/>}/>
          <Route path='/clientVisits' element={<ClientsVisitsPage/>}/>
          <Route path='/clientPayments' element={<ClientPaymentsPage/>}/>
          <Route path='/clientPaymentsInfo' element={<ClientPaymentsInfoPage/>}/>
          <Route path='/clientVisitsInfo' element={<ClientVisitsInfoPage/>}/>
          <Route path='/teacher' element={<TeacherPage/>}/>
          <Route path='/teacherPayments' element={<TeacherPaymentsInfoPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/addSchool' element={<AddNewSchoolPage/>}/>
          <Route path='/groups' element={<GroupsPage/>}/>
          <Route path='/adminPaymentsInfo' element={<AdminPaymentsInfoPage/>}/>
          <Route path='/addChild' element={<AddChildPage/>}/>
          <Route path='/childPayments' element={<AdminChildPaymentsInfo/>}/>
          <Route path='/changeRequisites' element={<ChangeRequisites/>}/>
          <Route path='/teachers' element={<AllTeachers/>}/>
          <Route path='/clientInvoices' element={<ClientInvoices/>}/>
      </Routes>
    </div>
  );
}

export default App;
