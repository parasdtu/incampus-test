import React, {Component} from 'react';
import image from '../SecProfilePic.jpg';
import logo from '../Logo.PNG';

class Navbar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className="main-nav">
                    <div className="nav-left">
                        <span className="hamburger-parent">
                            <i className="hamburger fas fa-bars" onClick={this.props.ChangeClass}></i>
                        </span>
                        <span>
                            <a href="#">
                                <img src={logo} style={{borderRadius: '50%', height: "3.5rem", width: "3.5rem"}} />
                            </a>
                        </span>
                    </div>
    
    
                    <div className="nav-right">
                        <div className="dsp-none-sm">
                
                            <ul className="nav-list">
                                <a href="#">
                                    <li className="nav-items pointer">
                                        HOME
                                    </li>
                                </a>
                        
                                <a href="#">
                                    <li className="nav-items pointer">
                                        EXPLORE
                                    </li>
                                </a>
                        
                                <a href="#">
                                    <li className="nav-items pointer">
                                        PROFILE
                                    </li>
                                </a>
                            </ul>
                        </div>
    
                        <div className="round-img">
                            <img src={image} alt="profile-pic" /> 
                        </div>
    
                        <div className="card">
                            <div className="top-offset"></div>
                                <div className="nav-info">
                                    <div className="flex-row justify-content-end">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY PROFILE</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY ADDRESSES</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY FOLLOWERS</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY FOLLOWING</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-end faded">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer">LOGOUT</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </nav>
        )
    }
}

export default Navbar;
