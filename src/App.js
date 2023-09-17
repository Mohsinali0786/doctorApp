import logo from './logo.svg';
import './App.css';
import { Calender } from './Components/Calender';
import DoctorList from './Pages/doctorList';
import Header from './Components/header';

function App() {
  return (
    <div className="App bg-color">
      <Header/>
      <DoctorList/>
      {/* <Calender/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
