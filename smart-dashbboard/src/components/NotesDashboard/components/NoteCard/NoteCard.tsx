import React from "react";
import TNote from "types/Note.type";
import Button from "components/common/Button";
import Text from "components/common/Text";

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
      <Text as="title">{title}</Text>
      <Text as="body">{body}</Text>
      <div>
        <Button onClick={hardcodedEditHandler}>Edit</Button>
        <Button onClick={() => remove(id)}>Remove</Button>
      </div>
    </div>
  );
};

export default NoteCard;
