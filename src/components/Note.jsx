import React from "react";

function Note({ data, deleteNote }) {
  return (
    <div className="note">
      <code>Note #{data.id}</code>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      {/* delete card button */}
      <i className="fa fa-trash-o" onClick={() => deleteNote()}></i>
    </div>
  );
}

export default Note;
