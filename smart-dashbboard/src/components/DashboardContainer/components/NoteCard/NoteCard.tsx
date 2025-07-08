import React from "react";

type TProps = {
  id: number;
  title: string;
  body: string;
  edit: (noteId: number) => void;
  remove: (noteId: number) => void;
};

const NoteCard = ({ body, edit, remove, title, id }: TProps) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <div>
        <button onClick={() => edit(id)}>Edit</button>
        <button onClick={() => remove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default NoteCard;
