import React, { Component } from 'react'

class Home extends Component{


    componentDidMount(){
        document.title='Kenan Ozbelli | Home'
    }
    render(){


        return(
            <>
            <h1 className='text-center'>Welcome To My Page</h1>
            </>

        )
    }



}

export default Home;