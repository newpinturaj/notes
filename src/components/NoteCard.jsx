import React from "react";
import "./NoteCard.css";

function NoteCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        x
      </button>
    </div>
  );
}

export default NoteCard;
