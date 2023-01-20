import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './components/Login-admin/Login';
import Home from './components/Homepage/Home';
import Addemployee from './components/Addemployeepage/Addemployee';
import NotFound from './components/Notfound';
import Employeedetails from './components/Employeedetailspage/Employeedetails';
import Editemployeedetails from './components/editpage/Edit';
import ApplyLeave from './components/Applyleavepage/Applyleave';
import Applicationlist from './components/Applicationlist/Applicationlist';
import Applyleavesend from './components/Applyleavepage/Applyleavesend';
import Sidebar from './components/Sidebarpage/Sidebar';
import EmployeeLoginPage from './components/Employeelogin/Employeelogin';
import EmployeeApplyleavesend from './components/Employeeapplyleave/Employeeapplyleavesend';
import EmployeeeApplyleave from './components/Employeeapplyleave/Employeeapplyleave';
import SecuredRouting from './components/Securedrouting';
import ManageLeave from './components/Manageleave/Manageleave';
import Unauthorized from './components/Unauthorized';
import Empdet from './components/Employeedetailspage/Aggrid';
import EmployeeEdit from './components/Employeeleaveedit/empleaveedit';
import Totalemployees from './components/Totalemployees/Totalemployees';
import Holiday from './components/Holidays/Holidays';
import Emponleave from './components/Emponleave/Emponleave';
import EditLeave from './components/Employeeapplyleave/Editleave';
import Applied from './components/Employeeapplyleave/Applied';

export default function CustomRouting()
{
    return <BrowserRouter>
  
    <Routes>

        <Route element={<SecuredRouting role="Admin"/>}>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Addemployee' element={<Addemployee/>}></Route>
        <Route path='/Employeedetails' element={<Employeedetails/>}></Route>
        <Route path='/Edit' element={<Editemployeedetails/>}></Route>
        <Route path='/Applyleave' element={<ApplyLeave/>}></Route>
        <Route path='/Applicationlist' element={<Applicationlist/>}></Route>
        <Route path='/Applyleavesend' element={<Applyleavesend/>}></Route>  
        <Route path='/Totalemployees' element={<Totalemployees/>}></Route>
        <Route path='/Holiday' element={<Holiday/>}></Route>
        <Route path='/Emponleave' element={<Emponleave/>}></Route>
        </Route>
              
        <Route element={<SecuredRouting role="Employee"/>}>
        <Route path='/EmployeeeApplyleave' element={<EmployeeeApplyleave/>}></Route>
        <Route path='/EmployeeApplyleavesend' element={<EmployeeApplyleavesend/>}></Route>
        <Route path='/ManageLeave' element={<ManageLeave/>}></Route>
        <Route path='/EditLeave' element={<EditLeave/>}></Route>
        <Route path='/Applied' element={<Applied/>}></Route>
        </Route>

        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/Sidebar' element={<Sidebar/>}></Route>
        <Route path='/EmployeeLoginPage' element={<EmployeeLoginPage/>}></Route>
        <Route path='/Unauthorized' element={<Unauthorized/>}></Route>
        <Route path='/Empdet' element={<Empdet/>}></Route>
            
    </Routes>

    </BrowserRouter>
}