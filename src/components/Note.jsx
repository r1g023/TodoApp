import React from "react";

const Note = ({ data, deleteCard }) => {
  return (
    <div className="note" key={data.id}>
      <code>Note ID#: {data.id}</code>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <button onClick={() => deleteCard()}>DELETE</button>
    </div>
  );
};

export default Note;
