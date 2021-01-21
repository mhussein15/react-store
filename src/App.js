import "./App.css";
import ComputerList from "./Components/ComputerList.jsx";
import Header from "./Components/Header";
import StoreFront from "./Components/StoreFront";
function App() {
  return (
    <div className="center">
      <Header />
      <StoreFront />
      <ComputerList />
    </div>
  );
}

export default App;
