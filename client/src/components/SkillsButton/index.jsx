import React, {useState} from "react";
import { Collapse } from "react-bootstrap";
import MySql from "../../Images/mySQL.png";
import Mongodb from "../../Images/Mongodb.png";
import Mongoose from '../../Images/mongoose.png';
import "./index.css";
function SkillButton() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <button onClick={
                    () => setOpen(!open)
                }
                aria-controls="collapse-text"
                aria-expanded={open}
                className="skillsButton">
                <strong>
                    Skills
                </strong>
            </button>
            <Collapse in={open}>
                <div id="collapse-text" className="text-center">
                    <hr style={
                        {margin: '20px 200px'}
                    }/>
                    <h1>
                        <i className="fab fa-html5 m-2 html" alt='Html 5'></i>
                        <i className="fab fa-css3 m-2 text-primary" alt='CSS3'></i>
                        <i className="fab fa-js-square m-2 text-warning" alt='JavaScript'></i>
                        <i className="fab fa-node m-2 text-success" alt='Node.js'></i>
                        <i className="fab fa-react m-2 react" alt='React.js'></i>
                        <i className="fab fa-bootstrap m-2 bootstrap " alt='BootStrap'></i>
                        <img src={MySql}
                            alt='MySql'
                            className='m-2'
                            style={
                                {
                                    width: '50px',
                                    height: '40px'
                                }
                            }/>
                        <img src={Mongodb}
                            alt='Mongodb'
                            className='m-2'
                            style={
                                {
                                    width: '40px',
                                    height: '40px'
                                }
                            }/>
                        <img src={Mongoose}
                            alt='Mongoose'
                            className='m-2'
                            style={
                                {
                                    width: '50px',
                                    height: '40px'
                                }
                            }/>
                    </h1>
                </div>
            </Collapse>
        </>
    );
}

export default SkillButton;
