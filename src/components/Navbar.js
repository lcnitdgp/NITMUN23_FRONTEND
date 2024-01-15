import { Component } from "react";
import './NavbarStyles.css';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {

 state = {clicked: false};

 handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
 }

  render() {
    return (
      <>
        <nav className={`NavbarItems ${this.state.clicked ? 'no-blur' : ''}`}>
        <Link to="/">
    <img className="navbar-logo-img" src="./assets/toplogo4.png" alt="logo" />
  </Link>
        

        <div className="menu-icons" onClick={this.handleClick}> 
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          
          {MenuItems.map((item ,index) => {
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}  onClick={this.handleClick}>
                <i className={item.icon}></i>{item.title}
                </Link>
            </li>
            );
          }
          )
          }
        </ul>
      </nav>
      </>
    );
  }
}

export default Navbar;