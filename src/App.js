import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is: {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  );
}

export default App;
