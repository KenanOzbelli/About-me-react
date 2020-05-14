import React, { useState } from 'react'
import {Button, Collapse} from 'react-bootstrap'
function SkillButton() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          aria-expanded={open}
          style={{background:'rgb(108, 96, 191)', textDecoration:'none'}}
        >
          Skills
        </Button>
        <Collapse in={open}>
          <div id="collapse-text">
            React.js | Node.js | Html5 | CSS3 | jQuery | JavaScript |
          </div>
        </Collapse>
      </>
    );
  }
  
  export default SkillButton;