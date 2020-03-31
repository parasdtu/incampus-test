import React, {Component} from 'react';
import image from '../SecProfilePic.jpg';

class SidePanel extends Component{
    render(){
        return(
            <div className="nav-info col-md-3">
                                <div className="profile-pic">
                                    <div className="d-flex justify-content-center profile-container">
                                            <img className="round-img user-pic" src={image} />
                                    </div>
                                    <div className="card">
                                            <p className="pointer black">Hi, UserName</p>
                                    </div>
                                </div>
                
                        <div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#" style={{textDecoration: "none"}}><span className="pointer black">MY PROFILE</span></a>
                            </div>
                            <div className="separator"></div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#" style={{textDecoration: "none"}}><span className="pointer black">MY ADDRESSES</span></a>
                            </div>
                                <div className="separator"></div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#" style={{textDecoration: "none"}}><span className="pointer black">MY FOLLOWERS</span></a>
                            </div>
                            <div className="separator"></div>
                            <div className="flex-row" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#" style={{textDecoration: "none"}}><span className="pointer black">MY FOLLOWING</span></a>
                            </div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="flex-row faded" style={{fontWeight: "bold", fontSize: "1.4rem", height: "5rem"}}>
                                <a href="#" style={{textDecoration: "none"}}><span className="pointer black">LOGOUT</span></a>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default SidePanel;