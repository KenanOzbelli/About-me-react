import React from 'react';
import { Card } from 'react-bootstrap';

export default function InTouchCard(){

    return(
        <>
        <Card className='m-5 bg-light cardBody' style={{borderRadius:'.3rem'}} border='dark'>
            <Card.Header className='text-center m-3 header text-white' style={{background:'rgb(13, 40, 64)'}}>
               <h1>Get In Touch</h1>
            </Card.Header>
            <Card.Body>
                Blah Blah Blah
            </Card.Body>
        </Card>
        </>
    )

}