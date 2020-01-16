import React from "react";
import {withRouter} from 'react-router-dom';
import NavButton from "./NavButton";
import './Styles/Header.css';

class Header extends React.Component {
    
    handleProfileClick = () => {
      this.props.history.push("/auth");//TODO
    }
  
    handleAnnouncementClick = () => {
      this.props.history.push("/adv");
    }
  
    handleLogInClick = () => {
      this.props.history.push("/auth");
    }
  
    handleLogOutClick = () => {
      this.props.history.push("/auth");//TODO
    }
  
    render(){
      return(
          <header className="Header">
              <div className="Header_Content">
              <div className="logo">REA</div>
              <nav>
                  <ul>
                      <li><NavButton text="Announcements" handleToggleClick={ this.handleAnnouncementClick }/></li>
                      <li>{ this.props.isLoggedIn && <NavButton text="Profile" handleToggleClick={ this.handleLogInClick }/> }</li>
                      <li>{ this.props.isLoggedIn ? 
                      (
                          <NavButton text="Log Out" handleToggleClick={ this.handleLogOutClick}/>
                      ) : 
                      (                  
                          <NavButton text="Log In" handleToggleClick={ this.handleLogInClick}/>
                      )
                      }</li>
                  </ul>
              </nav>
              </div>
          </header>
      );
    }
  }

  export default withRouter(Header);