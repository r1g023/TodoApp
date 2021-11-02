import React from "react";

const Notes = (props) => {
  return (
    <div className="note-list">
      {props.noteList.map((item) => (
        <div className="note" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
