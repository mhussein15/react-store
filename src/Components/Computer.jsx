import { ComputerListItems } from "../styles";
export default function Computer(props) {
  return (
    <ComputerListItems>
      <h4>{props.computer.name}</h4>
      <img src={props.computer.imgURL} />
      <p>{props.computer.price}</p>
    </ComputerListItems>
  );
}
