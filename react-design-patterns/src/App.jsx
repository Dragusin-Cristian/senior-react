import { useEffect, useLayoutEffect, useRef, useState } from "react";



function App() {

  const [number, setNumber] = useState(0)
  const [sectionStyle, setSectionStyle] = useState({})
  const sectionRef = useRef()

  /* 
  useEffect is asynchronous. 
  You see the number change in the DOM before the padding changes. 

  useLayoutEffect is synchronous. 
  You see the number change only after the padding has changed.
  */

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500)

    const bigNumber = 100000000

    for(let i = 0; i<= bigNumber; i++) {
      if(i === bigNumber) setSectionStyle({marginTop: `${random}px`})
    }
  }, [number])
  

  return (
    <div className="App">
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <button onClick={() => setNumber(current => current -1)}>-</button>
        <button onClick={() => setNumber(current => current +1)}>+</button>
      </section>
    </div>
  );
}


export default App;
