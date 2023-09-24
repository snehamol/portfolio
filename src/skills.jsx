import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav1 from './Nav';
import Exp from './exp';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Skills() {
  return (
    <>
    <Nav1/>
    <div className='row raw5'>
      <div className='col col-md-6 '>
      <h1>Skills</h1>
      {/* <Card style={{ width: '10rem', height:'8rem' }} className='card card2'>
      <ListGroup variant="flush">
        <ListGroup.Item>C</ListGroup.Item>
        <ListGroup.Item>C++</ListGroup.Item>
        <ListGroup.Item>Java</ListGroup.Item>
      </ListGroup>
    </Card>
    <Card className='card card1' style={{width: '10rem', height:'8rem' }}>
      <ListGroup variant="flush">
       
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
      </ListGroup>
    </Card>
    <Card className='card card1' style={{width: '10rem', height:'8rem' }}>
      <ListGroup variant="flush">
       
        <ListGroup.Item>PYTHON</ListGroup.Item>
        <ListGroup.Item>NASM</ListGroup.Item>
        <ListGroup.Item>MYSQL</ListGroup.Item>
      </ListGroup>
    </Card> */}

<MDBTable>
<MDBTableBody>
<tr className='table-dark '>
          <td  >C </td>  
        </tr>
        <tr className='table-dark'>
          <th >C++</th>  
        </tr>
        <tr className='table-dark'>
          <th scope='row'>Java</th>  
        </tr>
        <tr className='table-dark'>
          <th scope='row'>HTML</th>  
        </tr>
        <tr className='table-dark'>
          <th scope='row'>CSS</th>  
        </tr>
        <tr className='table-dark'>
          <th scope='row'>JavaScript</th>  
        </tr>
        <tr className='table-dark'>
          <th scope='row'>Mysql</th>  
        </tr>

      </MDBTableBody>
    </MDBTable>




    </div>
    <div className='col col-md-6 '>
      <Exp/>
    </div>
      
    </div>
    </>
  )
}

export default Skills



