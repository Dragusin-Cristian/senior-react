import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./utils";

const App = () => {
  return (
    <>
      <h1>Let's build some components</h1>

      <GlobalStyles />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
