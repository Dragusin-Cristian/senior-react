import React, { useEffect, useState } from "react";
import axios from "axios";
import TNote from "../../types/Note.type";
import NoteCard from "./components/NoteCard";
import ListView from "../common/ListView";

const DashboardContainer = () => {
  const [notes, setNotes] = useState<TNote[]>([]);

  const fetchNotes = async () => {
    const data = (await axios.get("/notes")).data;
    setNotes(data);
  };

  const editNote = (noteId: number) => {
    console.log(noteId);
  };
  const removeNote = (noteId: number) => {
    console.log(noteId);
  };

  useEffect(() => {
    if (!notes.length) {
      fetchNotes();
    }
  }, []);

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

export default DashboardContainer;
