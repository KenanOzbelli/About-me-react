import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
    return(
        <>
            <Row className=' mt-5 m-0 p-2' style={{borderTop:'8px solid #4C0BD9', background:'#6C60BF'}} >
                <Col>
                    <div className='text-center text-white' >
                        <p> &copy; Copyright Kenan Ozbelli</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}