import React, {useState} from "react";
import {Collapse} from "react-bootstrap";
import MySql from "../../Images/mySQL.png";
import Mongodb from "../../Images/Mongodb.png";
import Mongoose from '../../Images/mongoose.png';
import Handlebars from '../../Images/handlebars-js.png';
import Jquery from '../../Images/jquery.png';
import MERN from '../../Images/mern-img.png';
import Sequelize from '../../Images/sequelize.png';
import liquid from '../../Images/liqiuid_language.png';
import RBootstrap from '../../Images/React-bootstrap.png';
import "./index.css";

const images = [
    {
        photo: RBootstrap,
        alt: 'React-Bootstrap'
    },
    {
        photo: MySql,
        alt: 'MySql'
    },
    {
        photo: Sequelize,
        alt: 'Sequelize'
    },
    {
        photo: Mongodb,
        alt: 'Mongodb'
    }, {
        photo: Mongoose,
        alt: 'Mongoose'
    }, {
        photo: Handlebars,
        alt: 'Handlebars'
    }, {
        photo: Jquery,
        alt: 'Jquery'
    }, {
        photo: liquid,
        alt: 'Liquid'
    }

];

const logo = [
    {
        class: 'fab fa-html5 m-3 html phoneView',
        alt: 'Html 5'
    },
    {
        class: 'fab fa-css3 m-3 text-primary phoneView',
        alt: 'CSS3'
    },
    {
        class: 'fab fa-js-square m-3 text-warning phoneView',
        alt: 'javascript'
    },
    {
        class: 'fab fa-node m-3 text-success phoneView',
        alt: 'node.js'
    }, {
        class: 'fab fa-react m-3 react phoneView',
        alt: 'react.js'
    }, {
        class: 'fab fa-bootstrap m-3 bootstrap phoneView',
        alt: 'bootstrap'
    },


]
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
                    <hr />
                    <h1 style={
                        {fontSize: '80px'}
                    }>
                        {
                        logo.map((e, idx) => {
                            return (
                                <i className={
                                        e.class
                                    }
                                    alt={
                                        e.alt
                                    }
                                    key={idx}></i>
                            )
                        })
                    }
                        {
                        images.map((image, idx) => {
                            return (
                                <img src ={image.photo} alt ={image.alt} className='m-3 phoneView2'
                                    key={idx}
                                   />
                                  
                            )
                             
                        })
                        
                    }
                     <img src = {MERN} alt= 'MERN' className='m-2 MernView'/>
                     
                </h1>
                </div>
            </Collapse>
        </>
    );
}

export default SkillButton;
