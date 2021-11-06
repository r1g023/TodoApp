import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteList from "./note-list";
import Form from "./components/Form";

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

  let addNewNote = (note) => {
    let newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <h1>Todo App - Enter a Note!</h1>
      <Form addNewNote={addNewNote} />
      <Note notes={notes} />
    </div>
  );
};

export default App;
