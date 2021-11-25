import React, { useState, useEffect } from "react";

const Note = ({ data, toggleComplete }) => {
  const [toggle, setToggle] = useState({ slider: false });

  //save toggle button on localstorage
  useEffect(() => {
    let data = localStorage.getItem("toggle");
    if (data) {
      setToggle(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  //toggle slidr button on / off
  const handleSliderButton = (e) => {
    e.persist();
    console.log(e.target.name, ": ", e.target.value, e.target.checked);
    setToggle({
      ...toggle,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="note">
      <code>Note ID# {data.id}</code>
      <div className={data.completed ? " completed" : ""}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      {/* delete card button   */}

      <label htmlFor="slider" className="switch">
        <input
          type="checkbox"
          name="slider"
          id="slider"
          onChange={handleSliderButton}
          checked={toggle.slider}
          onClick={() => toggleComplete(data.id)}
        />
        <span className="slider round"></span>
      </label>

      <i className="fa fa-trash-o"></i>
    </div>
  );
};

export default Note;
