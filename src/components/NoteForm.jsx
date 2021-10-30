import React, { useState } from "react";

const NoteForm = (props) => {
  console.log("NoteForm props--->", props);

  return (
    <form action="">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="note">Note</label>
      <textarea name="body" id="note"></textarea>
      {/* button to submit form/note */}
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
