import React from "react";

function Note({ data }) {
  return (
    <div className="note-list">
      {data.map((note) => (
        <div className="note" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>

          {/* delete card button */}
          <i className="fa fa-trash-o"></i>
        </div>
      ))}
    </div>
  );
}

export default Note;
