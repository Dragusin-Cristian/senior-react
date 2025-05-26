import { useDeferredValue, useEffect, useState, useTransition } from "react";

const bigArray = [...Array(20000).keys()]

function App() {

  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState(bigArray)
  const [isPending, startTransition] = useTransition()
  const deferredInput = useDeferredValue(inputValue)

  const handleInput = e => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    startTransition(() => {
      console.log(deferredInput);
      const filtered = bigArray.filter(item => item.toString().includes(deferredInput))
      setList(filtered)
    })
  }, [deferredInput])

  const content = <section>
    <p>Searching for: {deferredInput || "All"}</p>
    {isPending ? <p>Loading...</p> : <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>}
  </section>


  return (
    <>
     <div>
      <input type="text" value={inputValue} onChange={handleInput}/>
      {content}
     </div>

    </>
  );
}

export default App;
