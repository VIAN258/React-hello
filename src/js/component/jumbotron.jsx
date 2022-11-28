import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = (props) => {
	return (
        <div class="jumbotron">
          <div class="container">
            <h1>{props.secundario}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p><a class="btn btn-primary btn-lg" role="button">Leer más</a></p>
          </div>
        </div>
	);
};

export default Jumbotron;






