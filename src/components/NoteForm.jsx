import React, { useState } from "react";

const NoteForm = (props) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  //handle changes
  const handleChanges = (e) => {
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
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
