import React, { useState, useEffect } from "react";
import Note from "./components/Note";

import NoteForm from "./components/NoteForm";
import noteList from "./note-list";

const App = () => {
  const [notes, setNotes] = useState(noteList);

  useEffect(() => {
    let data = localStorage.getItem("notes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = (notee) => {
    console.log("notee--->", notee);
    let newNote = {
      id: Date.now(),
      title: notee.title,
      body: notee.body,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <h1>Add a Note</h1>
      <NoteForm addNewNote={addNewNote} />
      <Note notes={notes} />
  </div>
  );
};

export default App;
