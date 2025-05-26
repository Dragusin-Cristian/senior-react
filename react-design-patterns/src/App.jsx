import { useState, useTransition } from "react";
import Cover from "./components/cover";
import Reviews from "./components/reviews";
import Writer from "./components/writer";
import { StyledButton } from "./components/styled-elements";

function App() {
  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition()

  const sectionHandler = (sec) => {
    console.log("before");
    startTransition(() => {
      //* delay the updating of a state 
      //* the state function needs to be directly called inside the setTransition utility function
      setSection(sec);
      console.log("inside");
    });
    console.log("after");
  }

  return (
    <>
      <StyledButton onClick={() => sectionHandler("Cover")}>
        Book Cover
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Reviews")}>
        Book Reviews
      </StyledButton>
      <StyledButton onClick={() => sectionHandler("Writer")}>
        Book's Writer
      </StyledButton>

    {isPending ? <p>Loading...</p> : section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}



    </>
  );
}

export default App;
