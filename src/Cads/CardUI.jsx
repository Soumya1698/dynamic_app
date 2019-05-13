import React from 'react';
import img1 from '../assests/1.jpg';

const Card = props => {
    return(
        <div className="card text-center">
        <div className="overflow">
        <img src={img1} alt="Image 1"/>
        </div>
        <div className="card-body" text-dark> 
        <h4 className="card-title">Card-title</h4>
        <p className="card-text text-secondary"> hey! </p>
        <a href="#" className="btn btn-outline-success">GO Anywhere!</a>
            </div>
        </div>


    );

}

export default Card;