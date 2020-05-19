import React, { Component } from 'react'

class Home extends Component{


    componentDidMount(){
        document.title='Kenan Ozbelli | Home'
    }
    render(){


        return(
            <>
            <h1 className='text-center m-3'>Welcome To My Page</h1>
            <h2 className='text-center m-3'> I am a certified Full-Stack Web Developer</h2>
            <h3 className='text-center m-3'> Based in Charlotte, NC</h3>
            </>

        )
    }



}

export default Home;