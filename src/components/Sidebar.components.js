import React, {Component} from 'react';
import image from '../SecProfilePic.jpg';

class Sidebar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={this.props.class} id="change">
                        <i className="close fas fa-times fa-200px"></i>
                        <div className="upper-half" style={{paddingTop: "30%" }}>
                            <div className="round-img" >
                                <img src={image} alt="profile-pic" /> 
                            </div>
                            <p>
                                Hi, Username Goes here
                            </p>
                            <div className="top-offset"></div>
                                <div className="nav-info">
                                    <div className="flex-row justify-content-start">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY PROFILE</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-start">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY ADDRESSES</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-start">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY FOLLOWERS</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                
                                    <div className="flex-row justify-content-start">
                                        <a href="#" style={{textDecoration: "none"}}>
                                            <span className="pointer ">MY FOLLOWING</span>
                                        </a>
                                    </div>
                                    <div className="separator"></div>
                                </div>
                                <br />
                                <a href="#" style={{textDecoration: "none"}}>
                                    <div>
                                        <button className="btn btn-primary">Logout</button>
                                    </div>
                               </a>
                        </div>
                </div>
        )
    }
}
export default Sidebar;