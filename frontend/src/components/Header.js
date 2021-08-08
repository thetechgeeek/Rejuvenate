import React from 'react';
// react Router Bootstrap used for wrapping react boot element in
// <linkcontainer> to make it behave like react Router <link>
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Rejuvenate</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i class='fas fa-user fa-lg'></i> Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/search'>
                <Nav.Link>
                  <i class='fas fa-search fa-lg'></i> Search
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i class='fas fa-shopping-cart fa-lg'></i> Cart
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
