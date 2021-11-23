import React from "react";

function Note({ data, deleteNote, toggleCard }) {
  return (
    <div className="note">
      <code>Note ID# {data.id}</code>
      <div className={data.completed ? " completed" : ""}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      {/* delete card button   */}

      <label className="switch">
        <input type="checkbox" onClick={() => toggleCard(data.id)} />
        <span className="slider round"></span>
      </label>

      <i className="fa fa-trash-o" onClick={() => deleteNote()}></i>
    </div>
  );
}

export default Note;
