import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteList from "./note-list";

const App = () => {
  return (
    <div className="App">
      to do app
      <Note notes={noteList} />
    </div>
  );
};

export default App;
