import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteList from "./note-list";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [notes, setNotes] = useState(noteList);

  const addNewNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <h1>Add a Note</h1>
      <NoteForm addNewNote={addNewNote} />
      <Note data={notes} />
    </div>
  );
};

export default App;
