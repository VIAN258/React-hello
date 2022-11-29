import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = (props) => {
	return (
   
  <nav className="navbar navbar-dark bg-dark">
    <ul className="nav">
      <li className="nav-item">
        <a className="navbar-brand p-2" href="#">{props.primario}</a>
      </li>
    </ul>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="navbar-brand" href="#">Home</a>
        <a className="navbar-brand" href="#">About</a>
        <a className="navbar-brand" href="#">Services</a>
        <a className="navbar-brand" href="#">Contact</a>
      </li>
    </ul>
  </nav>
    
	);
};

export default Navbar;


