import React, { useState } from "react";
import Notes from "../components/Notes";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First sticky note",
      body: "One should never stop learning",
    },
  ]);
  return (
    <div class="App">
      <h1>Add a Note</h1>
      <Notes />
    </div>
  );
};

export default App;
