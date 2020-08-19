//import the React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create react component
const App = () => {
  const buttonStyle = {
    backgroundColor: "cyan",
    color: "white",
  };
  return (
    <div>
      <button style={buttonStyle}>Click Me</button>
    </div>
  );
};

//take a react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
