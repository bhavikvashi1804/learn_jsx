//import the React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create react component
const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter your name:
      </label>
      <input type="text" id="name" />
      <button type="submit" style={{backgroundColor:'red', color:'white'}}>Submit</button>
    </div>
  );
};

//take a react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
