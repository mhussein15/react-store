import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 body{
    font-family: 'Staatliches', cursive;
    background-color:${props=>props.theme.backgroudColor};
    color:${props=>props.theme.textColor}
  }
`;

export const HeaderWrapper = styled.div`
  margin-top: 15px;
  h1,
  h5 {
    margin-bottom: 1rem;
  }
  text-align: center;
`;

export const HeaderStoreFront = styled.img`
  width: 80%;
  margin: auto;
`;

export const ComputerListWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
  flex-wrap: wrap;
`;

export const ComputerListItems = styled.div`
  img {
    height: 350px;
    padding: 20px;
  }
  h4 {
    padding: 15px;
  }
  p {
    padding: 15px;
    font-size: large;
  }
  text-align: center;
`;
