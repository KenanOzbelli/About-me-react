import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            <Row className=' mt-5 m-0 p-2'
                style={
                    {
                        borderTop: '8px solid #4C0BD9',
                        background: '#6C60BF'
                    }
            }>
                <Col>
                    <div className='text-center'>
                        <p>
                            &copy; Copyright Kenan Ozbelli</p>
                        <h3>
                            <button style={
                                {
                                    textDecoration: 'none',
                                    background: 'none',
                                    border: 'none',
                                    color: 'black'
                                }
                            }>
                            <i className="fab fa-github"></i>
                            </button>
                            <button style={
                                {
                                    textDecoration: 'none',
                                    background: 'none',
                                    border: 'none',
                                    color: 'black'
                                }
                            }>
                            <i className="fab fa-linkedin m-2"></i>
                            </button>
                            <button style={
                                {
                                    textDecoration: 'none',
                                    background: 'none',
                                    border: 'none',
                                    color: 'black'
                                }
                            }>
                            <i className="fas fa-envelope-square m-2"></i>
                            </button>
                        </h3>
                    </div>
                </Col>
            </Row>
        </>
    )
}
