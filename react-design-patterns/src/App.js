import { useState } from "react";
import "./App.css";
import ControlledForm from "./components/controlled-form";
import { ControlledModal } from "./components/controlled-modal";
import UncontrolledForm from "./components/uncontrolled-form";
import UncontrolledFlow from "./components/uncontrolled-flow";
import ControlledFlow from "./components/controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={goNext.bind(this, { name: "MyName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => goNext({ age: 27 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congratulations! You qualify for the gift!</h1>
      <button onClick={goNext.bind(this, { country: "Mars" })}>Next</button>
    </>
  );
};
const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={goNext.bind(this, { country: "Mars" })}>Next</button>
    </>
  );
};

function App() {
  // const [shouldDisplay, setShouldDisplay] = useState(false);
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

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

      {/* Uncontrolled onboarding modal */}
      {/* <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Yaee, you made it to the final step");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow> */}

      {/* Controlled onboarding flow */}
      <ControlledFlow
        currentIndex={currentStepIndex}
        onNext={onNext}
        onDone={(dataFromStep) => {
          const newData = { ...data, ...dataFromStep };
          setData(newData);
          console.log(newData);
          alert("Yaee, you made it to the final step");
        }}
      >
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
