import React, {Component} from "react";
import {Modal, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/ContactForm";
import InTouchCard from '../../components/InTouchCard';
import {Redirect} from "react-router-dom";
import API from "../../lib/API";
import './index.css';
import * as emailjs from 'emailjs-com';

export default class ContactPage extends Component {
    state = {
        redirectToReferrer: false,
        error: "",
        show: false,
        errShow: false
    };

    componentDidMount() {
        document.title = 'Kenan Ozbelli | Contact';
        document.body.style = 'background:none'
    
    }

    handleClose = () => {
        this.setState({show: false, errShow: false});
    };

    handleSubmit = (name, email, message) => {
        if (!name || !email ) {
            this.setState({show: false, errShow: true});
            return;

        } else {
            this.setState({show: true});

            let templateParams = {
                from_name: name,
                to_name: email,
                name: 'Kenan',
                message_html: message
            }

            emailjs.send('gmail', 'template_LYzfi7Zc', templateParams, `user_dcvPcMJFroG6yBnd4rN8z`)

            setTimeout(() => {
                API.Contacts.create(name, email, message).then((response) => {
                    this.setState({redirectToReferrer: true});
                }).catch((err) => {
                    if (err.response.status === 401) {
                        this.setState({error: "Sorry, Please try again."});
                    }
                });
            }, 5000);
        }
    };

    render() {
        const {from} = this.props.location.state || {
            from: {
                pathname: "/"
            }
        };
        const {redirectToReferrer} = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from}/>;
        }

        return (
            <>
            <div className='text-center'>
                <p style={{color:'#4C0BD9'}}>Would like to get in touch?</p>
                <h1 className='header'><strong>Contact Me</strong></h1>
            </div>
           
                <Row>
                    <Col lg='8' className='animate'>
                        <ContactForm onSubmit={
                            this.handleSubmit
                        }/>
                    </Col>
                    <Col lg='4'className='animate' >
                    <InTouchCard/>
                    </Col>
                </Row>
         
                <Modal show={
                        this.state.show
                    }
                    onHide={
                        this.handleClose
                }>
                    <Modal.Header style={
                        {
                            color: "white",
                            padding: "1rem",
                            textAlign: "center",
                            background: "darkGrey",
                            margin: "1rem"
                        }
                    }>
                        <div style={
                            {margin: '0 auto'}
                        }>
                            <h2>Thank You !!!</h2>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <strong>
                                Your Response has been recieved and recorded. Thank you for your time, you will be redirected back to the homepage.
                            </strong>
                        </p>
                    </Modal.Body>
                </Modal>
                <Modal show={
                        this.state.errShow
                    }
                    onHide={
                        this.handleClose
                }>
                    <Modal.Header style={
                        {
                            color: "white",
                            padding: "1rem",
                            textAlign: "center",
                            background: "red",
                            margin: "1rem"
                        }
                    }>
                        <div style={
                            {margin: '0 auto'}
                        }>
                            <h2>Hey Hold On a Second!</h2>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <strong>Hey, you haven't entered name or email. Please re-enter before submitting this form. Thank you!</strong>
                        </p>
                    </Modal.Body>
                </Modal>
        </>
        );
    }
}
