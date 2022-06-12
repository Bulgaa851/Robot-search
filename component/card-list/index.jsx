import React from "react";
import "./style.css";

export const cardList = (props) => (
  <div className="card-list">
    {props.robots.map((el) => (
      <div key="el.id">{el.name}</div>
    ))}
  </div>
);
