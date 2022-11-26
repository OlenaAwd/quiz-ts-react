import styled, { createGlobalStyle } from "styled-components";
import BackgroundImg from "./images/background.jpg";



export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BackgroundImg});
    background-size: 100% 100%;
background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
      color: #ff6b0a;
       font-size: 1.2rem;
  }
  .score {
   color: #ff6b0a;
    font-size: 2rem;
    margin-bottom: 25px;
    margin-top:0;
  }
  h1 {
    font-family: Source Serif Pro;
    color: #ff6b0a;
    font-weight: 600;
    background-size: 100%;
    font-size: 70px;
    text-align: center;
    margin-top: 30px;
     margin-bottom:25px
  }
  .start, .next {
    cursor: pointer;
    background: rgba(255,105,0,1);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 30px;
    justify-content:center;
    align-items:center;
    // max-width: 600px;
    width:100%
  }
  button:hover {
    background-color:#fefefe;
    
  }


  
`;