import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = (props) => {
	return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1072667604/es/vector/alegre-mu%C3%B1eco-de-nieve-de-navidad-aislado-sobre-fondo-blanco-ilustraci%C3%B3n-de-vector.jpg?s=612x612&w=is&k=20&c=JaWiBG1h95sUYtGZDO1tKQ7NzADesQZU_jPKlmWHN8A=" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{props.terciario}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1072667604/es/vector/alegre-mu%C3%B1eco-de-nieve-de-navidad-aislado-sobre-fondo-blanco-ilustraci%C3%B3n-de-vector.jpg?s=612x612&w=is&k=20&c=JaWiBG1h95sUYtGZDO1tKQ7NzADesQZU_jPKlmWHN8A=" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{props.terciario}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1072667604/es/vector/alegre-mu%C3%B1eco-de-nieve-de-navidad-aislado-sobre-fondo-blanco-ilustraci%C3%B3n-de-vector.jpg?s=612x612&w=is&k=20&c=JaWiBG1h95sUYtGZDO1tKQ7NzADesQZU_jPKlmWHN8A=" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{props.terciario}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      
	);
};

export default Card;

















