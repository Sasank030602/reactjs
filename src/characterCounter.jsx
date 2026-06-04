import React, { useState } from "react";
import "./index.css";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div className="Text">
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Current Text: {text}</p>
      <p>Characters: {text.length}</p>
      <p>_________________________________________________</p>
    </div>
  );
}

export default CharacterCounter;