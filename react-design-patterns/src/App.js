import { useState } from "react";
import "./App.css";
import ControlledForm from "./components/controlled-form";
import { ControlledModal } from "./components/controlled-modal";
import UncontrolledForm from "./components/uncontrolled-form";
import UncontrolledFlow from "./components/uncontrolled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}

      {/* Controlled modal */}
      {/* <ControlledModal
        shouldShow={shouldDisplay}
        close={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the modal!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(true)}>Show modal</button> */}

      <UncontrolledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
