import { useState } from "react";

const ToggelText = () => {
  const initialText = true;
  const [text, setText] = useState(initialText);

  function handleText() {
    setText(!text);
  }
  return (
    <div>
      <button onClick={handleText}>Toggle Text</button>
      {text ? <p>Hello Izzah</p> : <p>Bye Izzah</p>}
    </div>
  );
};

export default ToggelText;
