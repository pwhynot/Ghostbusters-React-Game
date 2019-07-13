import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
      value= {props.id} 
      onClick= {() => props.handleClick(props.id)}
      <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          
        </ul>
        
      </div>
    </div>
  );
}

export default Card;