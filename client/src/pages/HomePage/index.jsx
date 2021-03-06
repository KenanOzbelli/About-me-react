import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import image from '../../Images/charlotteImage.jpg'
import './index.css'

class Home extends Component {

    componentDidMount() {
        document.title = 'Kenan Ozbelli | Home'
        document.body.style=`background:${image}`
  }
    render() {


        return (
            <>
            <div style={{textDecoration:'none', border:'none'}} className='animate'>
                <h1 className='text-center m-3 homeText'>Welcome !!</h1>
            
            
                <h2 className='text-center m-3 homeText'>
                    I am a certified Full-Stack Web Developer</h2>
        
                <h3 className='text-center m-3 homeText'>
                    Based in Charlotte, NC</h3>
                </div>
                <Link to='/about-me'>
                    <h4 className='text-center m-5 slideLeft'>
                        <button className='exploreButton p-3'
                            style={
                                {
                                    border: 'none',
                                    borderRadius: '.3rem',
                                    color: 'white'
                                }
                        }>Explore My Page</button>
                    </h4>
                </Link>
            
            </>

        )
    }


}

export default Home;
