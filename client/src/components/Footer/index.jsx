import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default function Footer() {

    return (
        <>
            <Row className='mt-5 p-2'
                style={
                    {
                        borderTop: '8px solid #4C0BD9',
                        background: '#6C60BF'
                    }
            }>
                <Col>
                    <div className='text-center'>
                        <p className='header'>
                            &copy; Copyright Kenan Ozbelli</p>
                        <h3>
                            <button onClick = {() => { window.location = 'https://github.com/KenanOzbelli' }} style={
                                {
                                    textDecoration: 'none',
                                    background: 'none',
                                    border: 'none',
                                    color: 'black'
                                }
                            }>
                            <i className="fab fa-github"></i>
                            </button>
                            <button onClick = {() => {window.location = 'https://www.linkedin.com/in/kenan-ozbelli-9930b5125/'}} style={
                                {
                                    textDecoration: 'none',
                                    background: 'none',
                                    border: 'none',
                                    color: 'black'
                                }
                            }>
                            <i className="fab fa-linkedin"></i>
                            </button>
                            <button onClick = {() => window.location = 'mailto:kenan.ozbelli@gmail.com' } style={
                                {
                                    textDecoration: 'none',
                                    background: 'none',
                                    border: 'none',
                                    color: 'black'
                                }
                            }>
                            <i className="fas fa-envelope-square"></i>
                            </button>
                        </h3>
                    </div>
                </Col>
            </Row>
        </>
    )
}
