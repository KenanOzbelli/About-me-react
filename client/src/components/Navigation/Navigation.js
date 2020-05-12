import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navigation extends Component {

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className='Navigation text-center'>
        <nav className='navbar navbar-expand-lg navbar-light p-0 mb-5' style={{ boxShadow: '10px 10px 5px grey', background: '#6C60BF'}}>
        <div style={{textDecoration:'black', outline:'none'}}>
          <Link style={{ textDecoration:'none', background:'#4C0BD9', outline:'none', color:'white'}} className='navbar-brand p-3 ml-5'  to='/'>Kenan Ozbelli</Link>
        </div>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/' onClick={this.toggleCollapse}><i className="fas fa-home"></i> Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/portfolio' onClick={this.toggleCollapse}><i className="fas fa-portrait"></i> Portfolio</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/contact' onClick={this.toggleCollapse}><i className="fas fa-envelope-square"></i> Contact Page</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
