import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import { noteList, increment } from "./note-list";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [notes, setNotes] = useState({ noteList });
  console.log("notes------------------------------>", notes);

  const addNewNote = (note) => {
    console.log("note---->", note);
    let newNote = {
      id: increment(),
      title: note.title,
      body: note.body,
    };
    setNotes({
      ...notes,
      noteList: [...notes.noteList, newNote],
    });
  };

  function deleteCard(index) {
    let noteArray = [...notes.noteList];
    noteArray.splice(index, 1);
    setNotes({
      ...notes,
      noteList: noteArray,
    });
  }

  return (
    <div className="App">
      <h1>Add a Note</h1>
      <NoteForm addNewNote={addNewNote} />
      <div className="note-list">
        {notes.noteList.map((item, index) => (
          <Note
            data={item}
            key={item.id}
            deleteCard={() => deleteCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
