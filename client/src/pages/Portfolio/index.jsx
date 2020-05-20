import React, { Component } from "react";
import { Card, CardDeck, ListGroup } from "react-bootstrap";
import Projone from "../../Images/Projone.png";
import BatonPass from "../../Images/Baton_Pass-2.png";
import FlashCardQuiz from "../../Images/flashcard_quiz.png";
import EmployeeDirect from "../../Images/employeedirectory.png";
import FitnessTracker from "../../Images/FitnessTracker.png";
import Password from "../../Images/Password_Gen.png";
import "./index.css";

export default class Portfolio extends Component {

  componentDidMount(){
    document.title='Kenan Ozbelli | Portfolio';
    document.body.style='background: none'
}

  render() {
  
  
    return (
      <>
        <div className="m-5">
          <h1 className="text-center header">Portfolio</h1>
          <hr />
        </div>
        <CardDeck className="m-5">
          <Card className="portBody">
            <Card.Img
              src={Projone}
              style={{ width: "100%", borderRadius: ".5rem .5rem 0 0" }}
            />
            <Card.Body>
              <Card.Title>
                <h5>Projone</h5>
              </Card.Title>
              An Application that searches for recipies, and gives a calorie
              count and other nutritional facts.
            </Card.Body>
            <ListGroup className="list-group-flush text-center">
              <button
                className="Projone p-3"
                onClick={() =>
                  (window.location = "https://github.com/KenanOzbelli/projone")
                }
                style={{
                  border: "none",
                  borderBottom: "1px solid white",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </button>
              <button
                className="Projone p-3"
                onClick={() =>
                  (window.location = "https://kenanozbelli.github.io/projone/")
                }
                style={{
                  border: "none",
                  borderRadius: "0 0 .5rem .5rem",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fas fa-link"></i> App
              </button>
            </ListGroup>
          </Card>
          <Card className="portBody">
            <Card.Img
              src={FlashCardQuiz}
              style={{ width: "100%", borderRadius: ".5rem .5rem 0 0" }}
            />
            <Card.Body>
              <Card.Title>
                <h5>Flash Card Quiz</h5>
              </Card.Title>
              An Application that quizes your programming skills with different
              catagories and questions.
            </Card.Body>
            <ListGroup className="list-group-flush text-center">
              <button
                className="FlashCard p-3"
                onClick={() =>
                  (window.location =
                    "https://github.com/KenanOzbelli/flash-card-quiz")
                }
                style={{
                  border: "none",
                  borderBottom: "1px solid white",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </button>
              <button
                className="FlashCard p-3"
                onClick={() =>
                  (window.location =
                    "https://morning-dusk-12730.herokuapp.com/")
                }
                style={{
                  border: "none",
                  borderRadius: "0 0 .5rem .5rem",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fas fa-link"></i> App
              </button>
            </ListGroup>
          </Card>
          <Card className="portBody">
            <Card.Img
              src={BatonPass}
              style={{ width: "100%", borderRadius: ".5rem .5rem 0 0" }}
            />
            <Card.Body>
              <Card.Title>
                <h5>Baton Pass</h5>
              </Card.Title>
              An Application that helps your practice your art skills, and time
              yourself drawing.
            </Card.Body>
            <ListGroup className="list-group-flush text-center">
              <button
                className="BatonPass p-3"
                onClick={() =>
                  (window.location =
                    "https://github.com/KenanOzbelli/batonPass")
                }
                style={{
                  border: "none",
                  borderBottom: "1px solid white",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </button>
              <button
                className="BatonPass p-3"
                onClick={() =>
                  (window.location =
                    "https://mighty-meadow-35484.herokuapp.com/")
                }
                style={{
                  border: "none",
                  borderRadius: "0 0 .5rem .5rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fas fa-link"></i> App
              </button>
            </ListGroup>
          </Card>
        </CardDeck>
        <CardDeck className="m-5">
          <Card className="portBodyRight">
            <Card.Img
              src={EmployeeDirect}
              style={{ width: "100%", borderRadius: ".5rem .5rem 0 0" }}
            />
            <Card.Body>
              <Card.Title>
                <h5>Employee Directory</h5>
              </Card.Title>
              An Application uses a database that filters through all of the
              employees to create a Directory and even is able to alphabetically
              sort and also search for a specific person.
            </Card.Body>
            <ListGroup className="list-group-flush text-center">
              <button
                className="EmployeeDir p-3"
                onClick={() =>
                  (window.location =
                    "https://github.com/KenanOzbelli/Employee-Directory")
                }
                style={{
                  border: "none",
                  borderBottom: "1px solid white",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </button>
              <button
                className="EmployeeDir p-3"
                onClick={() =>
                  (window.location =
                    "https://rhubarb-custard-30671.herokuapp.com/")
                }
                style={{
                  border: "none",
                  borderRadius: "0 0 .5rem .5rem",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fas fa-link"></i> App
              </button>
            </ListGroup>
          </Card>
          <Card className="portBodyRight">
            <Card.Img
              src={FitnessTracker}
              style={{ width: "100%", borderRadius: ".5rem .5rem 0 0" }}
            />
            <Card.Body>
              <Card.Title>
                <h5>Fitness Tracker</h5>
              </Card.Title>
              An Application that Tracks your fitness routine and displays it
              for you to see. It also includes a feature which shows a pie chart
              for you to look at measurement wise.
            </Card.Body>
            <ListGroup className="list-group-flush text-center">
              <button
                className="FitnessTrack p-3"
                onClick={() =>
                  (window.location =
                    "https://github.com/KenanOzbelli/fitness_tracker")
                }
                style={{
                  border: "none",
                  borderBottom: "1px solid white",
                  bordertextDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </button>
              <button
                className="FitnessTrack p-3"
                onClick={() =>
                  (window.location =
                    "https://arcane-shore-02447.herokuapp.com/")
                }
                style={{
                  border: "none",
                  borderRadius: "0 0 .5rem .5rem",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fas fa-link"></i> App
              </button>
            </ListGroup>
          </Card>
          <Card className="portBodyRight">
            <Card.Img
              src={Password}
              style={{ width: "100%", borderRadius: ".5rem .5rem 0 0" }}
            />
            <Card.Body>
              <Card.Title>
                <h5>Password Generator</h5>
              </Card.Title>
              An Application that Generates a random password.
            </Card.Body>
            <ListGroup className="list-group-flush text-center">
              <button
                className="PassWord p-3"
                onClick={() => (window.location = "https://github.com/KenanOzbelli/Password-Generator")}
                style={{
                  border: "none",
                  borderBottom: "1px solid white",
                  bordertextDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fab fa-github"></i> GitHub
              </button>
              <button
                className="PassWord p-3"
                onClick={() => (window.location = "https://kenanozbelli.github.io/Password-Generator/")}
                style={{
                  border: "none",
                  borderRadius: "0 0 .5rem .5rem",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <i className="fas fa-link"></i> App
              </button>
            </ListGroup>
          </Card>
        </CardDeck>
      </>
    );
  }
}
