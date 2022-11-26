import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
   <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://4geeks.com/">4Geeks</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Integrante
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item text-info" href="#">Angel Morales</a></li>  
            </ul>
          </li>
          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ultimos 10 Campeones
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item text-danger" href="https://youtu.be/0hQP4QyN1J8">Test</a></li>
            </ul>
          </li>
          
          <a class="nav-link active" aria-current="page" href="https://www.google.com/search?q=todo+sobre+el+mundial+qatar+2022&oq=todo+sobre+el+&aqs=chrome.1.69i57j0i131i433j0i512l8.6299j0j15&sourceid=chrome&ie=UTF-8#sie=lg;/m/0fp_8fm;2;/m/030q7;st;fp;1;;;">Fase de Grupos</a>
          <a class="nav-link active" aria-current="page" href="https://www.fifa.com/es">FIFA</a>
        </div>
      </div>
    </div>
  </nav>
	);
};

export default Navbar;