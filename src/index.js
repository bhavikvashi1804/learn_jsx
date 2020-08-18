//import the React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create react component
const App = () => {
  return <h1>Hello world</h1>;
};

//take a react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
