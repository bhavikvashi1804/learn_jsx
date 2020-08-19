//import the React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create react component
const App = () => {

  function getTime(){
    const cTime=new Date().toLocaleTimeString();
    return cTime;
  }
  return (
    <div>
      <h3>Current Time:</h3>
      {getTime()}
    </div>
  );
};

//take a react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
