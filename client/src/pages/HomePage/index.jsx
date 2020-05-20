import React, { Component } from 'react'
import './index.css'

class Home extends Component{

    componentDidMount(){
        document.title='Kenan Ozbelli | Home'
        document.body.style='background: url(https://www.desktopbackground.org/download/o/2015/06/01/957548_charlotte-wallpapers_1920x1080_h.jpg);background-attachment: fixed; min-height: 100%; background-repeat: no-repeat; background-position: center; background-size: cover;'
    }
    render(){


        return(
            <>
            <h1 className='text-center m-3 animate'>Welcome To My Page</h1>
            <h2 className='text-center m-3 animate'> I am a certified Full-Stack Web Developer</h2>
            <h3 className='text-center m-3 animate'> Based in Charlotte, NC</h3>
            <h4 className='text-center m-5 slideLeft'> <button className='exploreButton p-3' style={{border:'none',borderRadius:'.3rem', color:'white'}}>Explore My Page</button></h4>
            </>

        )
    }



}

export default Home;