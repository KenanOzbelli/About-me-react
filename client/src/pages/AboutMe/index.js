import React, { Component } from "react";
import { Card, Row } from "react-bootstrap";
import Me from "../../Images/IMG_0495_transparent.png";
import SkillsButton from '../../components/SkillsButton'
import "./index.css";


class AboutMe extends Component {

  componentDidMount(){
      document.title='Kenan Ozbelli | About Me';
      document.body.style='background:none';
  }

  render() {
    
    return (
      <>
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
              <div className="mt-3 col-md-4 col-lg-3 text-center">
                <Card.Img
                  src={Me}
                  className='image'
                />
              </div>

              <div className="mt-3 col-lg-7 col-md-6">
                <h5>
                  I'm a free-lance Web Developer helping clients
                  build websites to their vision.
                </h5>
                <h5>
                  Fueled by my passion to always keep on learning new
                  technologies and implementing them, I consider myself a forever
                  student, eager to both build off of my academic foundations in
                  Web Developement and stay in touch with the latest feature in
                  the industry.
                </h5>
                <h5>
                  My hunger for knowledge and determination to turn information
                  into action has helped contribute to my success in finishing
                  the top of my class, also helped with building websites for
                  people with each new webiste more difficult than the last.
                </h5>
              </div>
            </Row>
            <div className='text-center m-3'>
            <SkillsButton/>
            </div>
          </Card.Body>
        </Card>
        <Card
          className="infoCard"
          style={{
            width: "10rem",
            position: "absolute",
            right: "67px",
            top: "128px",
            background: "cream",
          }}
        >
          <Card.Header
            className="text-center m-1"
            style={{ background: "rgb(76, 11, 217)", color: "white" }}
          >
            Contact Information
          </Card.Header>
          <Card.Body>
            <p>Phone Number: 980-621-6153</p>
            <p> Email: Kenan.Ozbelli@gmail.com</p>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AboutMe;
