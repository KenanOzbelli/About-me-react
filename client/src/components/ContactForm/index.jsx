import React, { Component } from "react";
import { Card} from "react-bootstrap";
import './index.css'

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
        <Card className="m-5 bg-white contBody p-4">
          <Card.Body> 
            <form onSubmit={this.handleSubmit}>
              <div className='mb-2 header'>Name <span className='text-danger'>*</span></div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-signature"></i>
                  </span>
                </div>
                <input
                  className="form-control bg-light"
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='mb-2 header'>Email <span className='text-danger'>*</span></div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text pr-3">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  className="form-control bg-light"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@provider.com"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='mb-2 header'>Message</div>
              <div className="input-group mb-3">
                <textarea
                  style={{ resize: "none" }}
                  className="form-control form-control-lg bg-light"
                  rows="3"
                  id="message"
                  type="message"
                  name="message"
                  placeholder="Enter a Message to Send"
                  value={message}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className="btn p-3 text-white contactBtn w-100" type="submit">
                Submit
              </button>
            </form>
            <hr/>
          <section>
            <p className='header'>Contact Information</p>
            <p><i class="fas fa-envelope text-secondary"></i> <span style={{color:'#445',fontWeight:'bolder', marginLeft:'1rem'}}>Kenan.Ozbelli@gmail.com</span></p>
            <p><i class="fas fa-phone text-secondary"></i><span style={{color:'#445',fontWeight:'bolder', marginLeft:'1rem'}}>+1 980 621 6153</span></p>        
            <p><i class="fab fa-linkedin text-secondary"></i><span style={{color:'#445',fontWeight:'bolder', marginLeft:'1rem'}}>Kenan Ozbelli</span></p>        
          </section>
          </Card.Body>
        </Card>

      </>
    );
  }
}
