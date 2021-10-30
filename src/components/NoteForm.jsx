import React, { useState } from "react";

const NoteForm = (props) => {
  console.log("NoteForm props--->", props);
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleChanges = (e) => {
    console.log("e--->", e.target.name, e.target.value);
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    //pass props to NoteFrom on APP compoment
    props.addNewNote(note);
    setNote({
      title: "",
      body: "",
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
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
      {/* button to submit form/note */}
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
