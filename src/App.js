
import './App.css';
import Nav1 from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import Education from './education';
import Exp from './exp';
import Contact from './contact';
import { Outlet } from 'react-router-dom';
import Home from './home';


function App() {
  return (
    <div className="App">
   
    <Home/> 
    
   

    <Outlet/>
    </div>
  );
}

export default App;
