import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false)
  
  //* won't focus:

  // const inputRef = useRef(null)

  // useEffect(() => {
  //   if(inputRef.current){
  //     inputRef.current.focus()
  //   }
  // }, [inputRef])


  //* will focus:
  const realInputRef = useRef()

  const inputRef = useCallback((input) => {
    realInputRef.current = input
    if(input === null) return
    input.focus()
  }, [])

  console.log(realInputRef.current?.value);
  


  return (
    <>
      <button onClick={() => setShowInput(s => !s)}>Switch</button>
      {showInput && <input  type="text" ref={inputRef}/>}
    </>
  )
}

export default App;
