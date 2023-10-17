import React, { useState } from "react";
import "./CreateNote.css";
import { v4 as uuidv4 } from "uuid";

function CreateNote(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  function handleChange(event) {
    const newVal = event.target;

    setNote((prevVal) => {
      return {
        ...prevVal,
        [newVal.name]: newVal.value,
      };
    });
  }

  return (
    <div className="create-note">
      {isExpanded && (
        <input
          type="text"
          name="title"
          id=""
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
      )}
      <textarea
        name="body"
        id=""
        rows={isExpanded ? 10 : 1}
        placeholder="Write a note..."
        value={note.body}
        onChange={handleChange}
        onClick={() => {
          setExpanded(true);
        }}
      ></textarea>
      {isExpanded && (
        <button
          onClick={() => {
            note.id = uuidv4();
            props.onAdd(note);
            setNote({
              title: "",
              body: "",
            });
            setExpanded(false);
          }}
        >
          +
        </button>
      )}
    </div>
  );
}

export default CreateNote;
