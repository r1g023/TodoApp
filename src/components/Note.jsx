import React from "react";

const Note = ({ data }) => {
  return (
    <div className="note-list">
      {data.map((item) => (
        <div className="note" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
