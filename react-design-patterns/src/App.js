import {
  GreenSmallButton as ComposedGreenSmallButton,
  RedButton as ComposedRedButton,
} from "./components/composition";

import {
  RedButton as PartialRedButton,
  SmallRedButton as PartialSmallRedButton,
} from "./components/partial";

function App() {
  return (
    <>
      <ComposedRedButton text={"I am red"} />
      <ComposedGreenSmallButton text={"I am small and green"} />

      <PartialRedButton text={"I am red"} />
      <PartialSmallRedButton text={"I am small and red"} />
    </>
  );
}

export default App;
