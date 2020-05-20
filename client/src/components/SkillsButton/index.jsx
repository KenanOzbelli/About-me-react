import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
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
        Skills hello
      </Button>
      <Collapse in={open}>
        <div id="collapse-text" className="text-center">
          <h1>
          <i class="fab fa-html5 m-2"></i>
            <i class="fab fa-css3 m-2"></i>
            <i class="fab fa-js-square m-2"></i>
            <i class="fab fa-node m-2"></i>
            <i class="fab fa-react m-2 text-primary"></i>
            <i class="fab fa-bootstrap m-2 "></i>
          </h1>
        </div>
      </Collapse>
    </>
  );
}

export default SkillButton;
