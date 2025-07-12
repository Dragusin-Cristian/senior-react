import React from "react";
import TNote from "../../types/Note.type";
import NoteCard from "./components/NoteCard";
import ListView from "../common/ListView";
import { InjectedProps } from "../../HOCs/withCrudResource";
import withCrudResource from "../../HOCs/withCrudResource";

const NotesDashboard: React.FC<InjectedProps<TNote>> = ({ items: notes }) => {
  const editNote = (noteId: number) => {
    console.log(noteId);
  };
  const removeNote = (noteId: number) => {
    console.log(noteId);
  };

  return (
    <div>
      <ListView<TNote>
        data={notes}
        renderItem={(note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            body={note.text}
            title={note.title}
            edit={editNote}
            remove={removeNote}
          />
        )}
      />
    </div>
  );
};

export default withCrudResource<TNote, {}>(NotesDashboard);
