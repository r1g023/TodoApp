import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("note");
    if (data) {
      setNote(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  //HANDLE CHANGES
  const handleChanges = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Titlxe</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChanges}
        value={note.title}
      />

      <label htmlFor="body">Note</label>
      <textarea
        name="body"
        id="body"
        name="body"
        onChange={handleChanges}
        value={note.body}
      ></textarea>

      <button type="submit">ADD NOTE</button>
    </form>
  );
};

export default Form;
