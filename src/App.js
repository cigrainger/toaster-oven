import React from "react";
import GithubCorner from "react-github-corner";
import { createGlobalStyle } from "styled-components";
import Generator from "./components/Generator";
import ToastContainer from "./components/ToastContainer";
import ToastProvider from "./components/ToastProvider";

const App = () => (
  <ToastProvider maxToasts={4}>
    <GlobalStyle />
    <ToastContainer timeout={3000} />
    <Generator />
    <GithubCorner
      href="https://github.com/cigrainger/toaster-oven"
      octoColor="#405362"
      bannerColor="#fdf4d8"
    />
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
