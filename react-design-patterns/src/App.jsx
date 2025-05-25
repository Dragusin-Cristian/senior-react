import { useDeferredValue, useEffect, useState } from "react";
import HeavyComponent from "./components/heavy-component";


function App() {
 
  const [keyword, setKeyword] = useState("")

  /* 
  Always pass a primitive value, because objects and arrays are different on each re-render in React.
  Passing an object or an array will cause an infinite loop, except from the case when they come from outside of the component.
  */
  const deferredKeyword = useDeferredValue(keyword)

  useEffect(() => {
    console.log("value: ", keyword);
    console.log("deferred value: ", deferredKeyword);
    console.log("---- end of render -----");
  }, [keyword, deferredKeyword])


  return (
    <>
     <input value={keyword} onChange={(e => setKeyword(e.target.value))} />
     <HeavyComponent keyword={deferredKeyword} />
    </>
  )
}

export default App;
