import React, {Component, Fragment} from 'react'
import './Profile.css';
import './profile2.css'
import image from './SecProfilePic.jpg';
import logo from './Logo.PNG';
import Navbar from "./components/Navbar.components";
import Sidebar from "./components/Sidebar.components";
import SidePanel from './components/SidePanel.components';
import Details from './components/Details.component';

class Profile extends Component{
    constructor(props){
        super(props);
        
        this.state={
            x:1,
            class:"sidebar sidebar-none"
        }
    }
    ChangeClass = () =>{
        if(this.state.x%2==1)
        {
            this.setState({class:"sidebar"});
            this.setState({x:this.state.x+1});
        }
        else
            {
                this.setState({class:"sidebar sidebar-none"});
                this.setState({x:this.state.x+1});
            }
    }
    render(){
        return (
            <Fragment>
            <header>
                <Navbar ChangeClass={this.ChangeClass} />
                <Sidebar class={this.state.class}/>
            </header>
                <div className="row c-arrangement">
                    <SidePanel/>                  
                    <Details />
                </div>
            </Fragment>
        )
    }
}


export default Profile
