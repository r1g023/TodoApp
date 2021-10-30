import React, { useState } from "react";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First sticky note",
      body: "One should never stop learning",
    },
  ]);
  return (
    <div className="App">
      <h1>Add a Note</h1>
      <NoteForm />
      <Notes notes={notes} />
    </div>
  );
};

export default App;
