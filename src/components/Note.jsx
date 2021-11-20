import React from "react";

function Note({ data, deleteNote, toggleCard }) {
  return (
    <div
      className={`note${data.completed ? " completed" : ""}`}
      onClick={() => toggleCard(data.id)}
    >
      <code>Note ID# {data.id}</code>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      {/* delete card button   */}
      <i className="fa fa-trash-o" onClick={() => deleteNote()}></i>
    </div>
  );
}

export default Note;
