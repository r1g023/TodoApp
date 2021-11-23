import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import { increment, noteList } from "./note-list";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [notes, setNotes] = useState({ noteList });

  //add New Note
  const addNewNote = (note) => {
    let newNote = {
      id: increment(),
      title: note.title,
      body: note.body,
    };
    setNotes({ ...notes, noteList: [...notes.noteList, newNote] });
  };

  //toggle noteCompleted
  function toggleCompleted(itemID) {
    setNotes({
      ...notes,
      noteList: notes.noteList.map((item) => {
        if (item.id === itemID) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  }

  return (
    <div className="App">
      <h1>Add a Note</h1>
      <NoteForm addNewNote={addNewNote} />
      <div className="note-list">
        {notes.noteList.map((item) => (
          <Note data={item} key={item.id} toggleCompleted={toggleCompleted} />
        ))}
      </div>
    </div>
  );
};

export default App;
