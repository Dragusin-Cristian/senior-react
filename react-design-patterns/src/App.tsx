import { useEffect, use, useRef, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [valueToSubmit, setValueToSubmit] = useState<string>("");

  // * useEffect is good for fetching and other business mechanisms
  // useEffect(() => {
  //   fetch("some data url");
  // }, []);

  // * don't use useEffect for event side effects (like user inputs, layout changes)
  // useEffect(() => {
  //   fetch("url to post data", {
  //     method: "POS",
  //     body: JSON.stringify(valueToSubmit),
  //   });
  // }, [valueToSubmit]);

  // * Never use chained useEffects
  // useEffect(() => {
  //   setB(a)
  // }, [a])
  // useEffect(() => {
  //   setB(c)
  // }, [b])
  // useEffect(() => {
  //   setB(d)
  // }, [c])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValueToSubmit(inputRef.current!.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button>Submit</button>
    </form>
  );
}

export default App;
