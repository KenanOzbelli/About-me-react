import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import PDF from "../../Resume/KenanOzbelliResume.pdf";
import Me from "../../Images/IMG_0495.jpg";
import "./index.css";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Card
          id="card"
          className="m-5 cardBody bg-light"
          border="dark"
          style={{ position: "relative" }}
        >
          <Card.Body>
            <Card.Header
              className="text-center text-light header"
              style={{ background: "#0D2840" }}
            >
              <h1>About Me</h1>
            </Card.Header>
            <Row>
              <div className="mt-3 col-md-4 col-lg-3">
                <Card.Img
                  src={Me}
                  style={{
                    borderRadius: "50%",
                    height: "220px",
                    width: "200px",
                    justifyContent: "center",
                    marginLeft: "1rem",
                  }}
                />
              </div>

              <div className="mt-3 col-lg-8 col-md-7">
                <h5 style={{ marginRight: "50px" }}>
                  Welcome to my Page. 
                  I am a Certified Full Stack Web Developer
                </h5>
              </div>
            </Row>
            <Card.Text className="text-center">
              <a href={PDF} style={{ textDecoration: "none", color: "black" }}>
                {" "}
                a PDF Link to my{" "}
                <span style={{ color: "rgb(76, 11, 217)" }}>Resume</span>
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
        <Card
          className="infoCard"
          style={{
            width: "10rem",
            position: "absolute",
            right: "67px",
            top: "257px",
            bottom: "211px",
            background: "cream",
          }}
        >
          <Card.Title className='text-center'>Contact Information</Card.Title>
          <Card.Body>
            <p>Phone Number: 980-621-6153</p>
            <p> Email: Kenan.Ozbelli@gmail.com</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HomePage;
