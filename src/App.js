import logo from './logo.svg';
import './App.css';
import { Calender } from './Components/Calender';
import DoctorList from './Pages/doctorList';
import Header from './Components/header';
import SideBar from './Components/sidebar'
import { UserList } from './Pages/userList';
import  AppRouter from './config/route'
import { BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App bg-color ">
      <BrowserRouter> 
        <Header/>
        <div class='body-heigh'>
          <div style={{textAlign:'left' , display:'flex'}}>
            <SideBar/>
            <AppRouter/>
          </div>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
