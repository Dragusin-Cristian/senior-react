import React from "react";
import TNote from "types/Note.type";
import NoteCard from "./components/NoteCard";
import ListView from "components/common/ListView";
import { CrudListInjectedProps } from "HOCs/withCrudResourceList";
import withCrudResourceList from "HOCs/withCrudResourceList";
import Text from "components/common/Text";
import AddNote from "./components/AddNote";
import AnimatedLayout from "components/layouts/AnimatedLayout";

const NotesDashboard: React.FC<CrudListInjectedProps<TNote>> = ({
  items: notes,
  removeItem: removeNote,
  editItem: editNote,
  addItem: addNote,
}) => {
  return (
    <div>
      <Text as="heading">Notes Dashborad</Text>
      <ListView<TNote>
        data={notes}
        renderItem={(note) => (
          <AnimatedLayout>
            <NoteCard
              key={note.id}
              id={note.id}
              body={note.text}
              title={note.title}
              edit={editNote}
              remove={removeNote}
            />
          </AnimatedLayout>
        )}
      />
      <AddNote addNote={addNote} />
    </div>
  );
};

export default withCrudResourceList<TNote, {}>(NotesDashboard);
