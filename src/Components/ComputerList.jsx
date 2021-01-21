import React from "react";
import Computer from"./Computer"
import computers from "../computers";
function ComputerList() {
  const computerList = computers.map((computer) => (
    <Computer key={computer.id} computer={computer}/>
  ));
  return <div className="computer-view">{computerList}</div>;
}

export default ComputerList;
