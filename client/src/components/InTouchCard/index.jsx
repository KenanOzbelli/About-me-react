import React from 'react';
import PDF from "../../Resume/KenanOzbelliResume.pdf";

export default function InTouchCard(){

    return(
      <>
      <article className='touchCard' style={{width:'20rem'}}>
        <h3>Stay in Touch</h3>
        <ul className='mt-3'>
        <li>Do you have any questions?</li>
        <li>Need to reach out to me?</li>
        <li>Lets Connect.</li>
        </ul>
        <hr/>
        <p>Also take a look at my Resume <a href={PDF} style={{color:'rgb(76, 11, 217)'}}>Here</a></p>     
        <p><button onClick={() => {window.location = 'https://www.linkedin.com/in/kenan-ozbelli-9930b5125/'}} style={{textDecoration:'none', border:'none', background:'none'}}><i className="fab fa-linkedin text-primary" style={{cursor:'pointer'}}></i><span style={{color:'#445',fontWeight:'bolder', marginLeft:'1rem', cursor:'pointer'}}>Kenan Ozbelli</span></button></p>        
        <p><button onClick = {() => { window.location = 'https://github.com/KenanOzbelli' }} style={{textDecoration:'none', border:'none',background:'none'}}><i className="fab fa-github text-dark"></i><span style={{color:'#445',fontWeight:'bolder', marginLeft:'1rem', cursor:'pointer'}}>GitHub</span></button></p>
      </article>
      </>
    )

}