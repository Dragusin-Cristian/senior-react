import React from "react";
import TNote from "../../../../types/Note.type";

type TProps = {
  id: number;
  title: string;
  body: string;
  edit: (noteId: number, updatedFields: Pick<TNote, "text" | "title">) => void;
  remove: (noteId: number) => void;
};

const NoteCard = ({ body, edit, remove, title, id }: TProps) => {
  const hardcodedEditHandler = () => {
    edit(id, { title: "updated title", text: "udpated text" });
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <div>
        <button onClick={hardcodedEditHandler}>Edit</button>
        <button onClick={() => remove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default NoteCard;
