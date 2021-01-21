import React from "react";

export default function Computer(props) {
  return (
    <div className="computer-view-items">
      <h4>{props.computer.name}</h4>
      <img src={props.computer.imgURL} />
      <p>Price:- {props.computer.price}</p>
    </div>
  );
}
