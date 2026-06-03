import React from "react";
import LiveNameDisplay from "./liveNameDisplay";
import CounterApp from "./counterApp";
import CharacterCounter from "./characterCounter";
import LoginPreview from "./loginPreview";

function App() {
  return (
    <div>
      <LiveNameDisplay />
      <CounterApp />
      <CharacterCounter />
      <LoginPreview />
    </div>
  );
}

export default App;