import React, {Component} from "react";
import {NavMenu} from "./Navitens"
import './Navbar.css'

class Navbar extends Component{
  state = {clicked: false}

  handlerClick = () => {
    this.setState({clicked: !this.state.clicked })
  }

  render(){
    return(
      <nav className="NavbarItem">
        <h1 className="Title">EnxadaFake</h1>
        <div className="menu-icon" onClick={this.handlerClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {NavMenu.map((NavItem,index)=> {
            return(
              <li key={index}>
                <a className={NavItem.className} href={NavItem.url}>
                  {NavItem.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>  
    )
  }
}

export default Navbar