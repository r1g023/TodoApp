import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import { noteList, increment } from "./note-list";

const App = () => {
  const [notes, setNotes] = useState({ noteList });
  console.log("notes.noteList---->", notes.noteList, "and---->", notes);

  //get Item from localStorage, e.g. 'note card'
  useEffect(() => {
    const data = localStorage.getItem("notes");
    data ? setNotes(JSON.parse(data)) : null;
  }, []);

  //save note card to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //delete a note card by it's index on the array, no toggle option
  // function deleteNote(index) {
  //   const notesArray = [...notes.noteList];
  //   //remove note on clicked index of notes array and remove just 1 item
  //   notesArray.splice(index, 1);
  //   setNotes({
  //     ...notes,
  //     noteList: notesArray,
  //   });
  // }

  //if toggle completed, delete Note
  function toggleComplete(itemID) {
    setNotes({
      ...notes,
      noteList: notes.noteList.map((item) => {
        if (item.id === itemID) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  }

  //add newNote from props on Noteform
  const addNewNote = (note) => {
    console.log("note--->", note);
    const newNote = {
      id: increment(),
      title: note.title,
      body: note.body,
    };
    setNotes({
      ...notes,
      noteList: [...notes.noteList, newNote],
    });
  };

  return (
    <div className="App">
      <h1>Add a Note</h1>
      <NoteForm addNewNote={addNewNote} />
      <div className="note-list">
        {notes.noteList.map((item, index) => (
          <Note data={item} key={item.id} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
};

export default App;
