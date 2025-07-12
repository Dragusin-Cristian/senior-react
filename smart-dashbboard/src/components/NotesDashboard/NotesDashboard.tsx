import React from "react";
import TNote from "../../types/Note.type";
import NoteCard from "./components/NoteCard";
import ListView from "../common/ListView";
import { CrudListInjectedProps } from "../../HOCs/withCrudResourceList";
import withCrudResourceList from "../../HOCs/withCrudResourceList";

const NotesDashboard: React.FC<CrudListInjectedProps<TNote>> = ({
  items: notes,
  removeItem: removeNote,
  editItem: editNote,
  addItem: addNote,
}) => {
  const hardcodedAddNoteHandler = () => {
    addNote({ title: "New note title", text: "New note text", userId: 1 });
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
      <button onClick={hardcodedAddNoteHandler}>Create Note</button>
    </div>
  );
};

export default withCrudResourceList<TNote, {}>(NotesDashboard);
