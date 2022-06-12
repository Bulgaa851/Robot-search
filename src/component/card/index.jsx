import React from "react";
import "./style.css";

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.robot.id}`} alt="" />
    <h2>{props.robot.name}</h2>
    <div> <b> Email: </b> {props.robot.email} </div>
    <div> <b> Phone number: </b>{props.robot.phone} </div>
  </div>
);
