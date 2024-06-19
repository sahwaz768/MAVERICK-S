"use client"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link  className='mx-4 text-white'href="#home">Home</Nav.Link>
            <Nav.Link  className='mx-4 text-white'href="#link">About Us</Nav.Link>
            <Nav.Link  className='mx-4 text-white'href="#link">Courses </Nav.Link>
            <Nav.Link  className='mx-4 text-white'href="#link">Policy</Nav.Link>
            <Nav.Link  className='mx-4 text-white'href="#link">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
