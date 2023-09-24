import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function Nav1() {
    return (
      <>
     <Navbar expand="lg" className="bg-body-tertiary nav" >
      <Container>
        <Navbar.Brand href="#home" className='name'>Sneha Mol K</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to ='/home'><Button variant="secondary" className='bt btn_nav'>Home</Button></Link>
              <Link to ='/personal'> <Button variant="secondary"  className='bt btn_nav'>About Me</Button></Link>
              {/* <Link to ='/education'><Button variant="secondary"  className='bt btn_nav'>Education</Button></Link> */}
              <Link to ='/skills'><Button variant="secondary"  className='bt btn_nav'>Skills & Experience</Button></Link>
              {/* <Link to ='/experience'><Button variant="secondary"  className='bt btn_nav'>Experience</Button></Link> */}
              <Link to ='/contact'><Button variant="secondary"  className='bt btn_nav'>Contact Me</Button></Link>

            




            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    
       
       
      




</>


        
  );
}
export default Nav1;