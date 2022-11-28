import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./nav-bar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let primario = "TEST1"
let secundario = "A Warm Welcome!"
const Home = () => {
	return (
	
	<div className="container">
		<Navbar primario={primario} />
		<Jumbotron secundario={secundario}/>
		<Card/>
		
	</div>
	
	);
};

export default Home;
