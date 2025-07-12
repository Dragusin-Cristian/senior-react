import React from "react";
import TNote from "types/Note.type";
import Button from "components/common/Button";
import Text from "components/common/Text";
import CardLayout from "components/layouts/CardLayout";

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
    <CardLayout>
      <CardLayout.Header>
        <Text as="title">{title}</Text>
      </CardLayout.Header>
      <CardLayout.Body>
        <Text as="body">{body}</Text>
      </CardLayout.Body>
      <CardLayout.Footer>
        <Button onClick={hardcodedEditHandler}>Edit</Button>
        <Button onClick={() => remove(id)}>Remove</Button>
      </CardLayout.Footer>
    </CardLayout>
  );
};

export default NoteCard;
