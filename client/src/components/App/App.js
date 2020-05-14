import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer';
import AboutMe from '../../pages/AboutMe';
import Portfolio from '../../pages/Portfolio';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/HomePage/index';
import './App.css';

import ContactPage from '../../pages/ContactPage';

class App extends Component {


  render() {
    return (
      <>
        <div className='App' style={{position: 'relative', minHeight:'100vh'}}>
          <Navigation />
     
            <Switch>
              <Route exact path='/' component={Home} /> 
              <Route path='/about-me' component={AboutMe}/>
              <Route path='/portfolio' component={Portfolio}/>
              <Route path='/contact' component={ContactPage}/>
              <Route component={NotFound} />
            </Switch>
        </div>
          <Footer style={{position: 'absolute', bottom:'0', width:'100%', height:'2.5rem'}}/>
      </> 
    );
  }
}

export default App;
