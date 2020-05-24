import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import MySql from "../../Images/mySQL.png";
import Mongodb from "../../Images/Mongodb.png";
import Mongoose from '../../Images/mongoose.png';
import "./index.css";
function SkillButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
        className="skillsButton"
      >
        Skills
      </Button>
      <Collapse in={open}>
        <div id="collapse-text" className="text-center">
          <h1>
            <i className="fab fa-html5 m-2 html"></i>
            <i className="fab fa-css3 m-2 text-primary"></i>
            <i className="fab fa-js-square m-2 text-warning"></i>
            <i className="fab fa-node m-2 text-success"></i>
            <i className="fab fa-react m-2 react"></i>
            <i className="fab fa-bootstrap m-2 bootstrap "></i>
            <img src={MySql} className='m-2' style={{width:'50px', height:'40px'}}/>
            <img src={Mongodb} className='m-2' style={{width:'40px', height:'40px'}}/>
            <img src={Mongoose} className='m-2' style={{width:'50px', height:'40px'}}/>
          </h1>
        </div>
      </Collapse>
    </>
  );
}

export default SkillButton;
