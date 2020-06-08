import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import classnames from 'classnames';
import './index.css'

class Navigation extends Component {

    state = {
        collapsed: true,
        prevScrollpos: window.pageYOffset,
        visible: true
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: 4,
            visible
        })
    }

    toggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    

    render() {
        const {collapsed} = this.state;
        const targetClass = `collapse navbar-collapse ${
            !collapsed && 'show'
        }`;
        const togglerClass = `navbar-toggler ${
            collapsed && 'collapsed'
        }`;

        return (
            <div className='Navigation sticky-top text-center'>
                <Navbar className={classnames({'navBar': !this.state.visible})}
                    style={
                        {background: '#6C60BF', padding:'0', marginBottom:'3rem'}
                }>
                    <div style={
                        {
                            textDecoration: 'black',
                            outline: 'none'
                        }
                    }>
                        <Link style={
                                {
                                    textDecoration: 'none',
                                    background: '#4C0BD9',
                                    outline: 'none',
                                    color: 'white'
                                }
                            }
                            className='navbar-brand p-3 ml-5'
                            to='/'>Kenan Ozbelli</Link>
                    </div>
                    <button className={togglerClass} style={{margin:'0 3rem'}}
                        onClick={
                            this.toggleCollapse
                        }
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className={targetClass} id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>

                            <li className='nav-item'>
                                <Link className='nav-link text-white ' to='/about-me'
                                    onClick={
                                        this.toggleCollapse
                                }>
                                    <i className="fas fa-address-card"></i> About Me</Link>
                            </li>


                            <li className='nav-item '>
                                <Link className='nav-link text-white ' to='/portfolio'
                                    onClick={
                                        this.toggleCollapse
                                }>
                                    <i className="fas fa-portrait"></i> Portfolio</Link>
                            </li>

                            <li className='nav-item '>
                                <Link className='nav-link text-white' to='/contact'
                                    onClick={
                                        this.toggleCollapse
                                }>
                                    <i className="fas fa-envelope-square"></i> Contact Page</Link>
                            </li>

                        </ul>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
