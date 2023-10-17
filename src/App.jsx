import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import NoteCard from "./components/NoteCard";
import "./App.css"

function App() {
  const [notes, setNote] = useState([]);

  function insertNote(note) {
    setNote((prevNotes) => {
      return [note, ...prevNotes];
    });
  }

  function rmNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={insertNote} />
      <div className="flex-container">
        {notes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              onDelete={rmNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
