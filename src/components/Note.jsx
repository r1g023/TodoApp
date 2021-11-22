import React from "react";

function Note({ data, deleteNote, toggleCard }) {
  return (
    <div className="note">
      <code>Note ID# {data.id}</code>
      <div className={data.completed ? " completed" : ""}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <button onClick={() => toggleCard(data.id)}>completed?</button>
      </div>
      {/* delete card button   */}

      <i className="fa fa-trash-o" onClick={() => deleteNote()}></i>
    </div>
  );
}

export default Note;
