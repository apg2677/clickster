import React from "react";
import "./card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
           
        </div>
        <span>{props.name}</span>
    </div>
);

export default Card;