import React from "react";

const Note = ({ data, toggleCompleted, deleteNote }) => {
  return (
    <div className="note">
      <code>Note id#: {data.id}</code>

      <div className={data.completed ? " completed" : ""}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <code style={{ display: "block" }}>Completed ?</code>
      </div>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>

      <button onClick={() => toggleCompleted(data.id)}> completed</button>

      <i className="fa fa-trash-o" onClick={() => deleteNote()}></i>
    </div>
  );
};

export default Note;
