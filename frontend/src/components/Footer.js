import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-primary text-white mt-5'>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Rupesh</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
