import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './index.css'

function Navigation() {
 
        return (
            <div style={{marginBottom:'7rem'}}>
               <Navbar style={{background:'#6C60BF', padding:'0'}} expand='lg' fixed='top'>
                <Navbar.Brand href='/' className='ml-5 p-3' style={{color:'white', background:'rgb(76, 11, 217)'}}>Kenan Ozbelli</Navbar.Brand>
                <Navbar.Toggle aria-controls='Collapse' style={{marginRight:'.5rem'}}/>
                <Navbar.Collapse id='Collapse' className='borderTop'>
                    <Nav className='navLinks mr-auto'>
                        <Nav.Link href='/about-me' style={{color:'white'}}>About Me</Nav.Link>
                        <Nav.Link href='/portfolio' style={{color:'white'}}>Portfolio</Nav.Link>
                        <Nav.Link href='/contact'style={{color:'white'}}>Contact</Nav.Link>
                    </Nav> 
               </Navbar.Collapse>
               </Navbar>
            </div>
        );
    }


export default Navigation;
