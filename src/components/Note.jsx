import React from "react";

const Note = (props) => {
  return (
    <div className="note-list">
      {props.notes.map((item) => (
        <div className="note" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
