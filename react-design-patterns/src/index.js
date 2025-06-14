import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./utils";
import { PrimaryButton } from "./components/button";

const App = () => {
  return (
    <>
      <PrimaryButton disabled>Click me</PrimaryButton>

      <GlobalStyles />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
