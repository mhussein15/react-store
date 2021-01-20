import "./App.css";
import computers from "./computers";

const computerList = computers.map((computer) => (
  <div className="computer-view-items">
    <h4>{computer.name}</h4>
    <img src={computer.imgURL} />
    <p>Price:- {computer.price}</p>
  </div>
));

function App() {
  return (
    <>
      <h1 className="title center">Computer Store</h1>
      <h5 className="secondary-title center">Your Place for a Custom PC</h5>
      <div className="center">
        <img
          className="img-responsive"
          src="https://cdn.shopify.com/s/files/1/0944/0000/collections/best-gaming-computers-toronto-canada-store-local-near-me_2000x.png?v=1601770840"
        />

        <div className="computer-view">{computerList}</div>
      </div>
    </>
  );
}

export default App;
