// By William Shi

import React from 'react'
import NavStyles from '../styles/Nav.module.css'
import { Navbar, Nav } from 'react-bootstrap'

const MainNav = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={NavStyles.navbar}>
      <Navbar.Brand href="">
        <img
          src="/logo.png"
          width="23"
          height="23"
          className="d-inline-block align-baseline mx-2"
        />
        <Nav.Link href="/" className={NavStyles.Brand}>
          Multi-System Resilience
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/resilience">Resilience</Nav.Link>
          <Nav.Link href="/research">Research</Nav.Link>
          <Nav.Link href="/#media">Media</Nav.Link>
          <Nav.Link href="/#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNav
