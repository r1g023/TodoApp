import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import noteList from "./note-list";

const App = () => {
  const [notes, setNote] = useState(noteList);

  //get Item from localStorage, e.g. 'note card'
  useEffect(() => {
    const data = localStorage.getItem("notes");
    data ? setNote(JSON.parse(data)) : null;
  }, []);

  //save note card to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
