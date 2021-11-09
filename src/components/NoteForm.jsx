import React, { useState, useEffect } from "react";

const NoteForm = (props) => {
  const [note, setNote] = useState({ title: "", body: "" });

  useEffect(() => {
    let data = localStorage.getItem("note");
    if (data) {
      setNote(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  const handleChange = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewNote(note);
    console.log("note in handlesubmit--->", note);
    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChange}
        value={note.title}
      />

      <label htmlFor="note"></label>
      <textarea
        name="body"
        id="body"
        onChange={handleChange}
        value={note.body}
      ></textarea>
      <button>ADD NOTE</button>
    </form>
  );
};

export default NoteForm;
