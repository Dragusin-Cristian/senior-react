import React, { useCallback, useState } from "react";
import Button from "components/common/Button";
import usePersistedRef from "hooks/usePersistedRef";

type Props = {
  addNote: () => Promise<{}>;
};

const AddNote = ({ addNote }: Props) => {
  const [isAdding, setIsAdding] = useState(false);
  const titleInputtRef = usePersistedRef();
  const textInputtRef = usePersistedRef();

  const addNoteHandler = useCallback(async () => {
    await addNote();
  }, [addNote]);

  return (
    <div>
      {isAdding ? (
        <>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" ref={titleInputtRef} />
          <label htmlFor="text">Text: </label>
          <input type="text" name="text" ref={textInputtRef} />
          <Button onClick={addNoteHandler}>Save Note</Button>
          <Button onClick={() => setIsAdding(false)}>Cancel</Button>
        </>
      ) : (
        <Button onClick={() => setIsAdding(true)}>Create note</Button>
      )}
    </div>
  );
};

export default AddNote;
