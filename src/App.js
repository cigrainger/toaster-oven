import React from "react";
import { createGlobalStyle } from "styled-components";
import Generator from "./components/Generator";
import Toast from "./components/Toast";
import ToastProvider from "./components/ToastProvider";

const App = () => (
  <ToastProvider maxToasts={3}>
    <GlobalStyle />
    <Generator />
    <Toast message="test" />
  </ToastProvider>
);

const GlobalStyle = createGlobalStyle`  
  @import url('https://fonts.googleapis.com/css?family=Lato');
  
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    font-family: 'Lato', sans-serif;
  }
`;

export default App;
