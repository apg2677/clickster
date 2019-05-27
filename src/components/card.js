import React from "react";
import "./card.css";

const Card = props => (
    <div className="card" onClick={()=> props.clickCount(props.id)}>
        <div className="img-container">
            <img width="325px" height="250px" alt={props.name} src={props.imageUrl}/>
           
        </div>
        <span>{props.name}</span>
    </div>
);

export default Card;