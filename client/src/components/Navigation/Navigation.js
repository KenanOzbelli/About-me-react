import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './index.css'

export default function Navigation(){

        return (
            <div style={{marginBottom:'7rem'}}>
               <Navbar style={{background:'#6C60BF', padding:'0'}} expand='lg' fixed='top'>
                <Navbar.Brand href='/' className='ml-5 p-3' style={{color:'white', background:'rgb(76, 11, 217)'}}>Kenan Ozbelli</Navbar.Brand>
                <Navbar.Toggle aria-controls='Collapse' style={{marginRight:'.5rem'}}/>
                <Navbar.Collapse id='Collapse'>
                    <Nav.Item>
                        <Nav.Link className='navlink' href='/about-me' >About Me</Nav.Link>
                    </Nav.Item>   
                    <Nav.Item>
                        <Nav.Link className='navlink'  href='/portfolio' >Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navlink'  href='/contact'>Contact</Nav.Link>
                    </Nav.Item>
               </Navbar.Collapse>
               </Navbar>
            </div>
        );
      }
    

