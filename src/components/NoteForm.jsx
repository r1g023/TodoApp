import React, { useState, useEffect } from "react";

const NoteForm = (props) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    let data = localStorage.getItem("note");
    if (data) {
      setNote(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  //handle changes
  const handleChanges = (e) => {
    e.persist();
    console.log(e.target.name, ":", e.target.value);
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({
      title: "",
      body: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="title"
        id="title"
        name="title"
        onChange={handleChanges}
        value={note.title}
      />

      <label htmlFor="body">Note</label>
      <textarea
        name="body"
        id="note"
        onChange={handleChanges}
        value={note.body}
      ></textarea>
      <input type="checkbox" />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;

// Local Storage – Data is stored in the browser’s memory, and it doesn’t expire even after the browser’s window is closed.

// Session storage – Data exists as long as the browser’s window is not closed.
