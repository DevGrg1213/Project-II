import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    const currentDate = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center my-3'>
                    <p>@Gadget Plaza  &copy; {currentDate}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer