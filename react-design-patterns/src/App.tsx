import { useState } from "react";

const useUrl = (defaultUrl: string) => {
  const [url, setUrl] = useState(defaultUrl);

  return [url, setUrl] as const; // this cast into const will keep the type outside the hook just like it is inside the hook
};

function App() {
  const [url, setUrl] = useUrl("www.google.com");

  return <></>;
}

export default App;
