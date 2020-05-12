import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
    return(
        <>
            <Row className='bg-info mt-5 m-0 p-2' style={{borderTop:'8px solid #0066ff'}} >
                <Col>
                    <div className='text-center' >
                        <p> &copy; Copyright Kenan Ozbelli</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}