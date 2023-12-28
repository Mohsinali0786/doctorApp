import { BrowserRouter, Routes, Route } from 'react-router-dom'
import allPaths from './path'
import DoctorList from '../Pages/doctorList'
import { UserList } from '../Pages/userList'
import PatientList from '../Pages/patientList'
import { Navigate } from 'react-router-dom';

function AppRouter() {
    return (
        // <BrowserRouter> 
            <Routes>
                <Route path={allPaths?.DOCTORLIST} element={<DoctorList/>} />
                <Route path={allPaths?.PATIENTLIST} element={<PatientList/>} />
                <Route path={allPaths?.USERLIST} element={<UserList/>} />

            </Routes>
        // </BrowserRouter>
    )
}
export default AppRouter