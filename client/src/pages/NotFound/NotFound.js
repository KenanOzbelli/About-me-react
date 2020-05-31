import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ErrPic from '../../Images/404picture.png'

export default () => {
  
  useEffect( () => {
    document.body.style = 'background: none';
  })
  
return(

  <div className='NotFound text-center'>
    <img src={ErrPic} alt='404 error with a robot'/>
     <p>
      Sorry, the page you requested cannot be found. <Link to='/'>Click
      here <i class="fas fa-hand-pointer"></i></Link> to return to the home page.
    </p>
  </div>

  )
};  
