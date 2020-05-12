import React, { Component } from "react";
import { Card} from "react-bootstrap";


export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    
    const { name, email, message } = this.state;

    this.props.onSubmit(name, email, message);

  };

  render() {
    const { name, email, message } = this.state;

    return (
      <>
        <Card className="m-5">
          <Card.Header className="m-3 text-center bg-dark text-light">
            <h1 className="text-center">Contact Page</h1>
           
          </Card.Header>
          <hr style={{margin:'0 10px 0 10px'}}/>
          <Card.Body> 
         
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-signature"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text pr-3">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@provider.com"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="input-group mb-3">
                <textarea
                  style={{ resize: "none" }}
                  className="form-control form-control-lg"
                  rows="3"
                  id="message"
                  type="message"
                  name="message"
                  placeholder="Enter a Message to Send"
                  value={message}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
