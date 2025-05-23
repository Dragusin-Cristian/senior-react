import { useState } from "react";
import "./App.css";
import ControlledForm from "./components/controlled-form";
import { ControlledModal } from "./components/controlled-modal";
import UncontrolledForm from "./components/uncontrolled-form";

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}

      <ControlledModal
        shouldShow={shouldDisplay}
        close={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the modal!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(true)}>Show modal</button>
    </>
  );
}

export default App;
