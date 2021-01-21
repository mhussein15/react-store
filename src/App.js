import ComputerList from "./Components/ComputerList.jsx";
import Header from "./Components/Header";
import { GlobalStyles } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  textColor:"#f7f1e3",
  backgroudColor:"#2c2c54"
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <ComputerList />
    </ThemeProvider>
  );
}

export default App;
