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

  //add a new note, passed from props on NoteForm
  const addNewNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.title,
    };
    //copy original notes array, and add new Note to it
    setNotes([...notes, newNote]);
  };
  return (
    <div className="App">
      <h1>Add a Note</h1>
      <NoteForm addNewNote={addNewNote} />
      <Notes notes={notes} />
    </div>
  );
};

export default App;
