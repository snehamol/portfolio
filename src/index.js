import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Personal from './personal';
import Education from './education';
import Exp from './exp';
import Contact from './contact';
import Home from './home';
import Nav1 from './Nav';
import Skills from './skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/home' element={<Home/>}/>
    <Route path='personal' element={<Personal/>}/>
    <Route path='education' element={<Education/>}/>
    <Route path='experience' element={<Exp/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='skills' element={<Skills/>}/>

  
</Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
