import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PDF from "../../Resume/KenanOzbelliResume.pdf";

export default function InTouchCard(){

    return(
        <>
        <Card className='m-5 bg-light' style={{borderRadius:'.3rem'}} border='dark'>
            <Card.Header className='text-center m-3 header text-white' style={{background:'rgb(13, 40, 64)'}}>
               <h1>Get In Touch</h1>
            </Card.Header>
            <Card.Body>
            <section>
            <ul>
             <li>Have a question? </li> 
            <li>How can I be useful to your service?</li>
            <li>Would like to stay in touch?</li>
            </ul>
            <article className='text-center'>Please Feel Free to contact me.</article><br/>
            <article className='text-center'>
              <a href={PDF} style={{ textDecoration: "none", color: "black" }}>
                {" "}a PDF Link to my{" "}
                <span style={{ color: "rgb(76, 11, 217)" }}>Resume</span>
              </a>
            </article>
            </section>
            <h2 className="text-center m-3">
              {" "}
              Link to My LinkedIn and Github Porfiles
            </h2>
            <Card>
              <Row>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        border: "none",
                        background: "white",
                      }}
                      onClick={() => {
                        window.location =
                          "https://www.linkedin.com/in/kenan-ozbelli-9930b5125/";
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "5rem",
                          color: "blue",
                          textDecoration: "none",
                        }}
                      >
                        <i className="fab fa-linkedin"></i>
                      </h1>
                    </button>
                  </div>
                </Col>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        border: "none",
                        background: "white",
                      }}
                      onClick={() => {
                        window.location = "https://github.com/KenanOzbelli";
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "5rem",
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <i className="fab fa-github-square"></i>
                      </h1>
                    </button>
                  </div>
                </Col>
              </Row>
            </Card>
            </Card.Body>
        </Card>
     </>
    )

}