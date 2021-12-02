import React, { useState, useEffect } from "react";

function Note({ data, deleteNote, toggleCard }) {
  return (
    <div className="note">
      <code>Note ID# {data.id}</code>
      <div className={data.completed ? " completed" : ""}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      {/* delete card button   */}

      <label htmlFor="terms" className="switch">
        <input type="checkbox" name="terms" id="terms" />
        <span className="slider round"></span>
      </label>

      <i className="fa fa-trash-o"></i>
    </div>
  );
}

export default Note;
