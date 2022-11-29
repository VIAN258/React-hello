import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./nav-bar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let primario = "Star Boostrap"
let secundario = "A Warm Welcome!"
let terciario = "Props Use"


const Home = () => {
	return (
	
	<div className="container">
		<Navbar primario={primario} />
		<Jumbotron secundario={secundario}/>
		<Card terciario={terciario}/>
		
		
	</div>
	
	);
};

export default Home;
