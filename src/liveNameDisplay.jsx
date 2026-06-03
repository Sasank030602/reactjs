import React, { useState } from "react";
import "./index.css";

function LiveNameDisplay() {
  const [name, setName] = useState("");

  return (
    <div class="Text">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name ? name : "Guest"}</h2>
      <p>_________________________________________________</p>
    </div>
  );
}

export default LiveNameDisplay;