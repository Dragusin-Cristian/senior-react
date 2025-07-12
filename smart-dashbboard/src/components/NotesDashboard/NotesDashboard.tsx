import React from "react";
import TNote from "../../types/Note.type";
import NoteCard from "./components/NoteCard";
import ListView from "../common/ListView";
import { CrudListInjectedProps } from "../../HOCs/withCrudResourceList";
import withCrudResourceList from "../../HOCs/withCrudResourceList";
import Text from "../common/Text";
import AddNote from "./components/AddNote";

const NotesDashboard: React.FC<CrudListInjectedProps<TNote>> = ({
  items: notes,
  removeItem: removeNote,
  editItem: editNote,
  addItem: addNote,
}) => {
  const hardcodedAddNoteHandler = async () => {
    return await addNote({
      title: "New note title",
      text: "New note text",
      userId: 1,
    });
  };

  return (
    <div>
      <Text as="heading">Notes Dashborad</Text>
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
      <AddNote addNote={hardcodedAddNoteHandler} />
    </div>
  );
};

export default withCrudResourceList<TNote, {}>(NotesDashboard);
