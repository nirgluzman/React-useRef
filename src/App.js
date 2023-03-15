import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <>
      <input
        ref={inputRef} // reference element inside HTML
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is: {name}</div>
      <div>I rendered {renderCount.current} times</div>

      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
