//import the React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";



//create react component
const App = () => {
  const buttonText="Click Me";
  const buttonText1=1234;
  const buttonText2=["Hii","Hello"];
  const buttonText3=[20,15];
  const buttonText4={
    text:'Click on me'
  };

  return (
    <div>
      <p>{buttonText}</p>
      <p>{buttonText1}</p>
      <p>{buttonText2}</p>
      <p>{buttonText2[0]}</p>
      <p>{buttonText3}</p> 
      {/* <p>{buttonText4}</p>  */}
      {/* gives error that you can not refer to JS object */}
      <p>{buttonText4.text}</p>     
    </div>
  );
};

//take a react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
