import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import noteList from "./note-list";

const App = () => {
  const [notes, setNote] = useState(noteList);

  //add newNote from props on Noteform
  const addNewNote = (note) => {
    console.log("note--->", note);
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
    };
    setNote([...notes, newNote]);
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
