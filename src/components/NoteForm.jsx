import React, { useState, useEffect } from "react";

const NoteForm = (props) => {
  const [note, setNote] = useState({ title: "", body: "" });

  useEffect(() => {
    console.log("getItem localstorage");
    const data = localStorage.getItem("note");
    if (data) {
      setNote(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    console.log("setItem localstore");
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  const handleChanges = (e) => {
    console.log(e.target.name, ": ", e.target.value);
    e.persist();
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={handleChanges}
        value={note.title}
      />

      <label htmlFor="note">Note</label>
      <textarea
        name="body"
        id="note"
        onChange={handleChanges}
        value={note.body}
      ></textarea>
      <button>Add Note</button>
    </form>
  );
};

export default NoteForm;
