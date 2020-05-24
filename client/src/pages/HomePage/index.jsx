import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import img from '../../Images/charlotteImage.jpg';
import './index.css'

class Home extends Component {

    componentDidMount() {
        document.title = 'Kenan Ozbelli | Home'
        document.body.style = `background-image: url(${img}) ;background-attachment: fixed; min-height: 100%; background-repeat: no-repeat; background-position: center; background-size: cover;`
    }
    render() {


        return (
            <>
                <h1 className='text-center m-3 animate'>Welcome To My Page</h1>
                <h2 className='text-center m-3 animate'>
                    I am a certified Full-Stack Web Developer</h2>
                <h3 className='text-center animate m-3'>
                    Based in Charlotte, NC</h3>
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
