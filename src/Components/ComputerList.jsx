import Computer from "./Computer";
import computers from "../computers";
import { ComputerListWrapper } from "../styles";
function ComputerList() {
  const computerList = computers.map((computer) => (
    <Computer key={computer.id} computer={computer} />
  ));
  return (
    <ComputerListWrapper>
      {computerList}
    </ComputerListWrapper>
  );
}

export default ComputerList;
