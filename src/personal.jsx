import React from 'react'
import './personal.css';
import Nav1 from './Nav';
import Education from './education';

function Personal() {
  return (
    <>
    <Nav1/>
    <div className="row  raw">
    <div  className='col col-md-6 '>
        <h1>Personal Information</h1>
        <p>Address: Kaniyeri (h),East Mukkola, Tanur (po),Malappuram Dt, Pin 676302 </p>
       
      
    </div>
    <div className='col col-md-6'>
    <Education/>
    </div>
    </div>

    </>
  )
}

export default Personal
