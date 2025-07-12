import React, { useDeferredValue, useState } from "react";
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
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredNotes = expensiveFilterFunction(deferredQuery);

  function expensiveFilterFunction(query: string) {
    // Simulate expensive work. For example fethcing from API:
    const start = performance.now();
    while (performance.now() - start < 200) {
      // Busy-wait to simulate slowness
    }
    if (!query) return notes;
    return notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div>
      <Text as="heading">Notes Dashborad</Text>
      <Text>
        <label htmlFor="expensive search">Expensive search simulator: </label>
        <input
          name="expensive search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </Text>
      <ListView<TNote>
        data={filteredNotes}
        renderItem={(note) => (
          <AnimatedLayout>
            <NoteCard
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
