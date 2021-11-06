import React, { useState, useEffect } from "react";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "first sticky note", body: "first note for my app" },
  ]);

  //runs first before setting localstorage itesm
  useEffect(() => {
    let data = localStorage.getItem("notes");
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
      <h2>Add a Note</h2>
      <NoteForm addNewNote={addNewNote} />
      <Notes noteList={notes} />
    </div>
  );
};

export default App;
