import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import PDF from "../../Resume/KenanOzbelliResume.pdf";
import Me from '../../Images/IMG_0495.jpg';
import './index.css';
class HomePage extends Component {
  render() {
    return (
      <div>
        <Card className="m-5 cardBody bg-light" border="dark">
          <Card.Body>
            <Card.Header className="text-center bg-dark text-light">
              <h1>About Me</h1>
            </Card.Header>
            <Row>
              <div className="mt-3 col-md-4 col-lg-3" >
                <Card.Img
                  src={Me}
                  style={{
                    borderRadius: "50%",
                    height:'220px',
                    width:'200px'
                  }}/>
              </div>
              <div className="mt-3 col-lg-9 col-md-8">
                <h5>
                  Hello My Name is Kenan Ozbelli. I am working towards obtaining
                  my certification to become a full Stack Developer
                </h5>
                <h5>
                  I am a hard working, full of energy, very sociable, problem
                  solver that will never give up even if the challenge proves
                  too difficult.
                </h5>
                <h5>
                  I would like to pursue a position in the field of Junior Web
                  Developer, and will learn the necessity to improve my work and
                  what the job will require me to learn.
                </h5>
              </div>
            </Row>
            <Card.Text className="text-center">
              <a href={PDF} style={{ textDecoration: "none", color: "black" }}>
                {" "}
                a PDF Link to my <strong>Resume</strong>
              </a>
            </Card.Text>
            <h2 className="text-center m-3">
              {" "}
             Link to My LinkedIn and Github Porfiles
            </h2>
            <hr />
            <Card>
              <Row>
                <Col>
                  <div style={{ textAlign: "center" }}>
                  <button style={{cursor: 'pointer', border:'none', background:'white'}} onClick={()=>{window.location = 'https://www.linkedin.com/in/kenan-ozbelli-9930b5125/'}}>
                    <h1 style={{ fontSize: "5rem", color: "blue", textDecoration: 'none' }}>
                      <i className="fab fa-linkedin"></i>
                    </h1>
                    </button>
                  </div>
                </Col>
                <Col>
                  <div style={{ textAlign: "center" }}>
                  <button style={{cursor:'pointer', border:'none', background:'white'}} onClick={()=> {window.location ='https://github.com/KenanOzbelli'}}>
                    <h1 style={{ fontSize: "5rem", textDecoration:'none', color:'black' }}>
                      <i className="fab fa-github-square"></i>
                    </h1>
                    </button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HomePage;
